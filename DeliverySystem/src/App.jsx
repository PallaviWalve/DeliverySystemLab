import React from "react";
import { BrowseRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Delivery from "./Delivery";
import AddDelivery from "./AddDelivery";
import UpdateDelivery from "./UpdateDelivery";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <div>
      <BrowseRouter>
        <Routes>
          <Route path="/" element={Delivery}></Route>
          <Route path="/addDelivery" element={AddDelivery}></Route>
          <Route path="/updateDelivery/:id" element={UpdateDelivery}></Route>
        </Routes>
      </BrowseRouter>
    </div>
  );
}

export default App;
