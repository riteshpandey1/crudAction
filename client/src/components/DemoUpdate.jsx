import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {useNavigate } from "react-router-dom";


const DemoUpdate = () => {
  const navigate = useNavigate();

    
    const goToHome = (e) => {
        e.preventDefault();
        navigate("/admin-panel");
      }

  return (
    <div className="form-data">
      <p className="para-demo">Update Products</p>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Update Name" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Update Price" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Category</Form.Label>
          <Form.Control type="text" placeholder="Update Category" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Company</Form.Label>
          <Form.Control type="text" placeholder="Update Company" required />
        </Form.Group>
        <Button variant="primary" type="submit" disabled>
          Update
        </Button>
        <Button variant="primary" type="submit" style={{margin:'5px'}} onClick={goToHome}>
         AdminPanel
        </Button>
      </Form>
    </div>
  );
};

export default DemoUpdate;
