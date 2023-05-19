import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";


const Addmin = () => {
  const [data, setData] = useState([]);

  const getProducts = async () => {
    let result = await fetch("http://localhost:8000/read-product");

    result = await result.json();
    setData(result);
  };

  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:8000/delete-product/${id}`, {
      method: "delete",
    });
    if (result) {
      getProducts();
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="admin-panel">
      <p className="para-admin">Admin Panel</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Category</th>
            <th>Product Company</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {data.map((element, id) => {
            const { name, price, category, company } = element;
            return (
              <tr>
                <td>{id + 1}</td>
                <td>{name}</td>
                <td>$ {price}</td>
                <td>{category}</td>
                <td>{company}</td>
                <td>
                  <div className="list-buttons">
                    <i
                      className="fa-solid fa-trash-can"
                      onClick={() => deleteProduct(element._id)}
                    ></i>

                    <Link to={`/update/${element._id}`}>
                      <i className="fa-regular fa-pen-to-square"></i>
                    </Link>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Addmin;
