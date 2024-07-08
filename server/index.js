const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Delivery = require("./models/Delivery");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/DeliverySystem");

app.get("/", (req, res) => {
  Delivery.find({})
    .then((delivery) => res.json(delivery))
    .catch((err) => res.json(err));
});

app.get("/getDelivery/:id", (req, res) => {
  const id = req.params.id;
  Delivery.findById({ id: id })
    .then((delivery) => res.json(delivery))
    .catch((err) => res.json(err));
});

app.put("/updateDelivery/:id", (req, res) => {
  const id = req.params.id;
  Delivery.findByIdAndUpdate(
    { _id: id },
    {
      id: req.body.id,
      orderid: req.body.orderid,
      deliveryaddress: req.body.deliveryaddress,
      deliverydate: req.body.deliverydate,
      deliveryfee: req.body.deliveryfee,
    }
  )
    .then((delivery) => res.json(delivery))
    .catch((err) => res.json(err));
});

app.delete("/deleteDelivery/:id", (req, res) => {
  const id = req.params.id;
  Delivery.findByIdAndDelete({ _id: id })
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});

app.post("/addDelivery", (req, res) => {
  Delivery.create(req.body)
    .then((delivery) => res.json(delivery))
    .catch((err) => res.status(400).json(err));
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
