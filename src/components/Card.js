import React from "react";
import { Card } from "react-bootstrap";

const Cardto = (props) => {
  const data = props.feed;
  return (
    <div>
      <Card className="my-2 p-2" style={{ width: "25rem" }}>
        <Card.Img
          style={{ objectFit: "cover" }}
          variant="top"
          src={data.images.poster_art.url}
        />
        <Card.Body>
          <Card.Title>{`${data.title}`}</Card.Title>
          <Card.Text>{`${data.description}`}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cardto;
