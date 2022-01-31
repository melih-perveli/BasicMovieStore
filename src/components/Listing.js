import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Col } from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";
import { useLocation } from "react-router-dom";
import Cardto from "./Card";

const Listing = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const [feed, setFeed] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("./data.json");
      setFeed(res.data);
    } catch (err) {
      alert(err.message);
    }
  };

  const moviesFilter = feed.filter(function (e) {
    return e.programType === "movie";
  });

  const seriesFilter = feed.filter(function (e) {
    return e.programType === "series";
  });

  let location = useLocation();
  let filtered = location.pathname === "/movie" ? moviesFilter : seriesFilter;

  return (
    <Fragment>
      <CardGroup>
        {filtered.map((e) => (
          <Col sm={12} md={6} lg={4} key={e.title}>
            <Cardto feed={e} />
          </Col>
        ))}
      </CardGroup>
    </Fragment>
  );
};

export default Listing;
