import React from "react";
import { Container, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
