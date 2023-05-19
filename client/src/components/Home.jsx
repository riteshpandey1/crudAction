import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";



const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState({
    name: "",
    price: "",
    category: "",
    company: "",
  });
  
  const addProducts = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setProducts({ ...products, [name]: value });
  };
  
  const submitedProducts = async (e) => {
    e.preventDefault();
    const { name, price, category, company } = products;
    let result = await fetch("http://localhost:8000/insert-product", {
      method: "post",
      body: JSON.stringify({
        name,
        price,
        category,
        company,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    // console.log(result);
      navigate('/admin-panel')
  };

  return (
    <div className="form-data">
      <p className="para-home">Add Products Into DataBase</p>
      <Form onSubmit={submitedProducts}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Product Name"
            required
            name="name"
            onChange={addProducts}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Product Price"
            required
            name="price"
            onChange={addProducts}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Product Category"
            required
            name="category"
            onChange={addProducts}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Company</Form.Label>
          <Form.Control
            type="text"
            placeholder="Product Company"
            required
            name="company"
            onChange={addProducts}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Data
        </Button>
      </Form>
    </div>
  );
};

export default Home;
