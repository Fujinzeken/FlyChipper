import ReactPaginate from "react-paginate";
import "../styles/flightTable.css";
import { Container, Row, Col } from "reactstrap";
import { useState } from "react";
const FlightTable = ({ data, setShowTable }) => {
  const [pageNum, setPageNum] = useState(0);

  const productPerPage = 8;
  const visitedPage = pageNum * productPerPage;

  const displayPage = data.slice(visitedPage, visitedPage + productPerPage);
  const pageCount = Math.ceil(data.length / productPerPage);
  const changePage = ({ selected }) => {
    setPageNum(selected);
  };

  if (data.length < 1)
    return (
      <Container>
        <p style={{ color: "red" }}>No flight price matches your budget 😔</p>
      </Container>
    );
  return (
    <section className="table__container">
      <Container className="table__wrapper">
        <span className="close" onClick={() => setShowTable(false)}>
          X
        </span>

        <div class="table-responsive-sm">
          {" "}
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>From</th>
                <th>To</th>
                <th>Price</th>
                <th>Avaialable seats</th>
                <th>Departure Date</th>
                <th>Arrival Date</th>
              </tr>
            </thead>
            <tbody>
              {displayPage?.map((item, i) => (
                <tr key={i}>
                  <td>{item.cityFrom}</td>
                  <td>{item.cityTo}</td>
                  <td>€{item.price}</td>
                  <td>{item.availability.seats}</td>
                  <td>
                    {new Date(item.local_departure).toLocaleDateString(
                      "en-GB",
                      {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      }
                    )}
                  </td>
                  <td>
                    {new Date(item.local_arrival).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <ReactPaginate
            pageCount={pageCount}
            onPageChange={changePage}
            previousLabel="Prev"
            nextLabel="Next"
            containerClassName="paginationBtns"
          />
        </div>
      </Container>
    </section>
  );
};

export default FlightTable;
