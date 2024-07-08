const mongoose = require("mongoose");

const DeliverySchema = new mongoose.Schema({
  id: Number,
  deliverydate: Number,
  orderid: Number,
  deliveryaddress: String,
  deliveryfee: Number,
});

const DeliverySys = mongoose.model("delivery", DeliverySchema);
module.exports = DeliverySys;
