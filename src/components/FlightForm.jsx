import axios from "axios";
import React, { useState } from "react";
import "../styles/flightForm.css";
import FlightTable from "./FlightTable";
import { Col, Container, Row } from "reactstrap";
import Loader from "./loader";
import { ToastContainer, toast } from "react-toastify";

const locationEndpoint = "https://api.tequila.kiwi.com/locations/query";
const searchEndpoint = "https://api.tequila.kiwi.com/v2/search";
const apikey = process.env.REACT_APP_API_KEY;

const FlightForm = () => {
  const [tab, setTab] = useState("flight");
  const [searchData, setSearchData] = useState("");
  const [showTable, setShowTable] = useState(false);
  const [loading, setLoading] = useState(false);

  const toastOptions = {
    position: "top-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dateFrom = e.target[2].value.split("-");
    const dateTo = e.target[3].value.split("-");

    console.log(dateFrom, dateTo);
    const dateFromyear = dateFrom[0];
    dateFrom[0] = dateFrom[2];
    dateFrom[2] = dateFromyear;

    const dateToyear = dateTo[0];
    dateTo[0] = dateTo[2];
    dateTo[2] = dateToyear;

    const budget = e.target[4].value;

    const newDateFrom = dateFrom.join("-").replace(/-/g, "/");
    const newDateTo = dateTo.join("-").replace(/-/g, "/");
    console.log(newDateFrom, newDateTo);

    if (e.target[0].value.length < 2) {
      toast.error(
        "Please enter a from location in the from input box",
        toastOptions
      );
      return;
    } else if (e.target[1].value.length < 2) {
      toast.error(
        "Please enter a destination in the to input box",
        toastOptions
      );
      return;
    } else if (e.target[2].value.length < 2) {
      toast.error("Please enter a date from", toastOptions);
      return;
    } else if (e.target[3].value.length < 2) {
      toast.error("Please enter a date to", toastOptions);
      return;
    }

    setLoading(true);
    const params = {
      locale: "en-US",
      loaction_types: "airport",
      limit: 10,
      active_only: true,
    };
    try {
      const flyFromresult = await axios.get(`${locationEndpoint}`, {
        params: {
          term: e.target[0].value,
          ...params,
        },
        headers: {
          apikey: apikey,
        },
      });
      const flyFromId = flyFromresult.data.locations[0].id;
      console.log(flyFromId);

      const flyToresult = await axios.get(`${locationEndpoint}`, {
        params: {
          term: e.target[1].value,
          ...params,
        },
        headers: {
          apikey: apikey,
        },
      });
      const flyToId = flyToresult.data.locations[0].id;
      console.log(flyToId);

      const search = await axios.get(`${searchEndpoint}`, {
        params: {
          fly_from: flyFromId,
          fly_to: flyToId,
          date_from: newDateFrom,
          date_to: newDateTo,
          nights_in_dst_from: 7,
          nights_in_dst_to: 30,
        },
        headers: {
          apikey: apikey,
        },
      });

      if (budget) {
        const data = search.data.data.filter((data) => budget >= data.price);
        setLoading(false);
        setSearchData(data);
        setShowTable(true);
      } else {
        setLoading(false);
        setSearchData(search.data.data);
        setShowTable(true);
      }

      console.log(search.data.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Container>
      <Row>
        <Col lg="12">
          <div className="flight__form">
            <div className="flight__pane">
              <span
                className={tab === "flight" ? "active" : "flights"}
                onClick={() => setTab("flight")}
              >
                Flights
              </span>
              <span
                className={tab === "stay" ? "active" : "stays"}
                onClick={() => setTab("stay")}
              >
                Stays
              </span>
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <div className="form__wrapper">
                  <div className="form__div">
                    <label>
                      From<span style={{ color: "red" }}>*</span>
                    </label>
                    <input type="text" placeholder="Flying From...." />
                  </div>
                  <div className="form__div">
                    <label>
                      To<span style={{ color: "red" }}>*</span>
                    </label>
                    <input type="text" placeholder="Flying To...." />
                  </div>
                  <div className="form__div">
                    <label>
                      Date From<span style={{ color: "red" }}>*</span>
                    </label>
                    <input type="date" placeholder="dd-mm-yyyy" />
                  </div>
                  <div className="form__div">
                    <label>
                      Date To<span style={{ color: "red" }}>*</span>
                    </label>
                    <input type="date" placeholder="dd-mm-yyyy" />
                  </div>
                  <div className="form__div">
                    <label>Max Ticket Budget(in Euros)</label>
                    <input type="text" placeholder="Max Budget...." />
                  </div>
                </div>
                <div className="form__btn-container">
                  <button className="form__btn">Search</button>
                </div>
              </form>
            </div>
            {showTable && (
              <FlightTable data={searchData} setShowTable={setShowTable} />
            )}
          </div>
          {loading && <Loader />}
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default FlightForm;
