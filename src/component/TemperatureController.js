import { useState } from "react";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import React from "react";

export const TemperatureController = () => {
  const [count, setCount] = useState(0);
  const handleAddonclick = () => {
    setCount(count + 1);
  };
  const handleSubonclick = () => {
    setCount(count - 1);
  };
  return (
    <Container>
      <Card style={{ height: "300px", width: "300px" }}>
        <p>{count} C</p>
        <Button
          className="text-white bg-dark mx-5 my-5 "
          onClick={handleAddonclick}
        >
          
          +
        </Button>
        <Button
          className="text-white bg-dark mx-5 my-5"
          onClick={handleSubonclick}
        >
          
          -
        </Button>
      </Card>
    </Container>
  );
};
