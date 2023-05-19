const express = require("express");
const app = express();
const PORT = 8000;

require("./db/config");
const Products = require("./db/modalAndschema");

const cors = require("cors");
app.use(cors());
app.use(express.json());

// Insert Data Into Database........
app.post("/insert-product", async (req, resp) => {
  let product = new Products(req.body);
  let result = await product.save();
  resp.send(result);
});

// Read Data Into Database........
app.get("/read-product", async (req, resp) => {
  let getProduct = await Products.find(req.body);
  if (getProduct.length > 0) {
    resp.send(getProduct);
  } else {
    resp.send({ msg: "no result found" });
  }
});

// Delete Data Into Database
app.delete("/delete-product/:id", async (req, resp) => {
  resp.send(req.params.id);
  let deletedData = await Products.deleteOne({ _id: req.params.id });
});

// get single user list for updated...........
app.get("/get-single-users/:id", async (req, res) => {
  let result = await Products.find({ _id: req.params.id });
  if (result) {
    res.send(result);
  } else {
    res.send({ message: "result not foundsssss" });
  }
});

// come data in database he is updated.......
app.put("/update-come-record/:id", async (req, res) => {
  let updateDataResult = await Products.updateOne(
    {
      _id: req.params.id,
    },
    { $set: req.body }
  );
  res.send(updateDataResult)
});


app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
