import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function AddDelivery() {
  const [id, setId] = useState();
  const [deliverydate, setDeliveryDate] = useState();
  const [orderid, setOrderId] = useState();
  const [deliveryaddress, setDeliveryAddress] = useState();
  const [deliveryfee, setDeliveryFee] = useState();

 const navigate = useNavigate();
 const Submit = (e) => {
   e.preventDefault();
   axios
     .post("http://localhost:3001/addDelivery", { id, deliverydate, orderid, deliveryaddress, deliveryfee })
     .then((res) => {
       console.log(res);
       navigate("/");
     })
     .catch((err) => console.log(err));
 };
  return (
    <div className="d-flex vh-100 bg-info justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Submit}>
          <h2>ADD Delivery</h2>
          <div className="mb-2">
            <label for="id">Id:</label>
            <input
              type="number"
              id="id"
              name="id"
              required
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label for="deliverydate">DeliveryDate:</label>
            <input
              type="number"
              id="deliverydate"
              name="deliverydate"
              required
              onChange={(e) => setDeliveryDate(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label for="orderid">OrderId:</label>
            <input
              type="number"
              id="orderid"
              name="orderid"
              required
              onChange={(e) => setOrderId(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label for="deliveryaddress">DeliveryAddress:</label>
            <input
              type="text"
              id="deliveryaddress"
              name="deliveryaddress"
              required
              onChange={(e) => setDeliveryAddress(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label for="deliveryfee">DeliveryFee:</label>
            <input
              type="number"
              id="deliveryfee"
              name="deliveryfee"
              required
              onChange={(e) => setDeliveryFee(e.target.value)}
            />
          </div>
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddDelivery;
