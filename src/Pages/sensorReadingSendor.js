import React, { useEffect, useState } from "react";

import axios from "axios";

import { useParams, Link } from "react-router-dom";

// reactstrap components

const Sender = () => {
  let { id, token, username } = useParams();

  const [idP, setId] = useState(id ? id : "000");
  const [tokenP, setToken] = useState(token ? token : "000");
  const [usernameP, setUsername] = useState(username ? username : "000");

  // alert(usernameP);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const sendReadings = async () => {
    while (true) {
      await sleep(15000);
      let sensId = getRandomInt(3);
      let value = Math.round(getRandomArbitrary(10, 40));

      let reading = {
        sensor_id: sensId,
        value: value,
      };

      console.log("=============readings==================");
      console.log(reading);
      console.log("====================================");

      await axios
        .post("http://localhost:8083/api/readings/Add", reading)
        .then((res) => {});
    }
  };

  useEffect(() => {
    sendReadings();
  });

  return <>....Sending Data....</>;
};

export default Sender;
