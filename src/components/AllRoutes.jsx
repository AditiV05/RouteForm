import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import MyForm from "../pages/Form";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/register" element={<MyForm />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  );
};

export default AllRoutes;
