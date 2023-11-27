import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

const useSector = () => {
  const [fetchData, setFetchData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/api/v1/sector");
      const data = await response.json();
      return setFetchData(data);
    };
  }, []);

  return [fetchData];
};

export default useSector;
