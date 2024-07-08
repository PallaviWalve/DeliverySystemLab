import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Delivery() {
  const [delivery, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/")
      .then((result) => setUsers(result.data))
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/deleteDelivery/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-warning justify-content-center align-items-center">
      <div className="w-50 bg-white rouded p-3">
        <h1>Delivery System</h1>
        <table className="table">
          <thead>
            <th>Id</th>
            <th>DeliveryId</th>
            <th>DeliveryDate</th>
            <th>DeliveryAddress</th>
            <th>DeliveryFee</th>
          </thead>
          <tbody>
            {delivery.map((delivery) => (
              <tr>
                <td>{delivery.id}</td>
                <td>{delivery.deliverydate}</td>
                <td>{delivery.orderid}</td>
                <td>{delivery.deliveryaddress}</td>
                <td>{delivery.deliveryfee}</td>
                <td>
                  <Link
                    to={`/update/${delivery._id}`}
                    className="btn btn-success"
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={(e) => handleDelete(delivery._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/addTv" className="btn btn-success">
          Add +
        </Link>
      </div>
    </div>
  );
}

export default Delivery;
