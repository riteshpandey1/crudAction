import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbars = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <div className="link-style">
          <Link to="/">Home</Link>
          <Link to="/admin-panel">Admin Panel</Link>
          <Link to="/update">Update Product</Link>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navbars;
