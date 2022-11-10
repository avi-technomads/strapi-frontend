import React, { useEffect, useState } from "react";
import axios from "axios";
const baseUrl = process.env.REACT_APP_BACKEND_URL;

const Stages = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    axios
      .get(`${baseUrl}/api/stages`)
      .then((res) => {
        console.log("🚀 ~ res", res);
        // setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div>Stages</div>;
};

export default Stages;
