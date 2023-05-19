import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Update = () => {
  const [proName, setProName] = useState();
  const [proPrice, setProPrice] = useState();
  const [proCatagory, setProCategory] = useState();
  const [proCompany, setProCompany] = useState();

  const params = useParams();
  const navigate = useNavigate();

  const getSingleApi = async () => {
    let fetchSingleUser = await fetch(
      `http://localhost:8000/get-single-users/${params.id}`
    );
    fetchSingleUser = await fetchSingleUser.json();
    console.log(fetchSingleUser);
    let { category, company, name, price } = fetchSingleUser[0];
    setProName(name);
    setProPrice(price);
    setProCategory(category);
    setProCompany(company);
  };

  useEffect(() => {
    getSingleApi();
  }, []);

  const comeDataUpdate = async (e) => {
    e.preventDefault();
    let updateResult = await fetch(
      `http://localhost:8000/update-come-record/${params.id}`,
      {
        method: "put",
        body: JSON.stringify({
          name: proName,
          price: proPrice,
          category: proCatagory,
          company: proCompany,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    updateResult = await updateResult.json();
    navigate("/admin-panel");
  };

  const goToHome = (e) => {
    e.preventDefault();
    navigate("/admin-panel");
  }

  return (
    <div className="form-data">
      <p className="para-update">Update Products</p>
      <Form onSubmit={comeDataUpdate}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Update Name"
            required
            value={proName}
            onChange={(e) => setProName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Update Price"
            required
            value={proPrice}
            onChange={(e) => setProPrice(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Update Category"
            required
            value={proCatagory}
            onChange={(e) => setProCategory(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Company</Form.Label>
          <Form.Control
            type="text"
            placeholder="Update Company"
            required
            value={proCompany}
            onChange={(e) => setProCompany(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" style={{margin:'5px'}}>
          Update
        </Button>
        <Button variant="primary" type="submit" onClick={goToHome}>
          AdminPanel
        </Button>
      </Form>
    </div>
  );
};

export default Update;
