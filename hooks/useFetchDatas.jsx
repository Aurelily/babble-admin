import React from "react";
import { useState, useEffect } from "react";

// I create this reusable custom hook to fetch datas from API

function useFetchDatas(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(`Error:  ${err}`));
  }, [url]);
  return { data };
}

export default useFetchDatas;
