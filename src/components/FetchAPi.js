import React, { useState } from "react";

const useFetchAPi = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setdata] = useState("");

  function fetchApi(url) {
    fetch(url)
      .then((res) => res.json)
      .then((data) => setdata(data))
      .catch((err) => {
        console.log(err);
      });
  }

  return { loading, data };
};

export default useFetchAPi;
