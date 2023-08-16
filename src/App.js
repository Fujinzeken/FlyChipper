import "./App.css";
// import axios from "axios";
import { useState } from "react";
// import { useEffect } from "react";
import TopContent from "./components/TopContent";

// const endpoint = "https://api.tequila.kiwi.com/locations/query";
// const apikey = "BGuaC80rRDCbk-POVcsIe7UPIk41Ja9M";

function App() {
  const [response, setResponse] = useState("");
  // useEffect(() => {
  //   const res = async () => {
  //     try {
  //       const result = await axios.get(
  //         `${endpoint}?term=LAG&locale=en-US&location_types=airport&limit=10&active_only=true`,
  //         {
  //           headers: {
  //             apikey: apikey,
  //           },
  //         }
  //       );
  //       setResponse(result.data);
  //       console.log(result.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   res();
  // }, []);

  return (
    <div className="App">
      <TopContent />
      {console.log(response)}
    </div>
  );
}

export default App;
