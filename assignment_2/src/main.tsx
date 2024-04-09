import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./Homepage";
import Detail from "./Detail";
import DashBoard from "./Admin";
import AddTrips from "./pages/Trips/add";
import ViewTrips from "./pages/Trips";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
        <Route path="/dashboard" element={<DashBoard />}>
          <Route path="view" element={<ViewTrips />}></Route>
          <Route path="add" element={<AddTrips/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
