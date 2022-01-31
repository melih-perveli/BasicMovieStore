import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import Placeholder from "../assets/placeholder.png";
const Home = () => {
  const movieLocation = {
    pathname: "/movie",
    state: { fromDashboard: true },
  };

  const seriesLocation = {
    pathname: "/series",
    state: { fromDashboard: true },
  };

  return (
    <div className="d-flex justify-content-center my-5">
      <div className="text-center p-2 ">
        <Card style={{ width: "18rem" }}>
          <Card.Body className="my-3">
            <Card.Img variant="top" src={Placeholder} />
            <Button variant="outline-warning" size="lg">
              <Link to={movieLocation}>Movie</Link>
            </Button>
          </Card.Body>
        </Card>
      </div>

      <div className="text-center p-2">
        <Card style={{ width: "18rem" }}>
          <Card.Body className="my-3">
            <Card.Img variant="top" src={Placeholder} />
            <Button variant="outline-warning" size="lg">
              <Link to={seriesLocation}>Series</Link>
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Home;
