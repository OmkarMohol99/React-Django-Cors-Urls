import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Display from "../Screens/Display";
import EditStudent from "../Screens/EditStudent";
import Home from "../Screens/Home";

const NavBar = () => {
  return (
    <>
      <NavLink to="home">Home</NavLink>
      <NavLink to="display">Display</NavLink>

      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/display" element={<Display />}></Route>
        <Route path="/editStudent/:id" element={<EditStudent />}></Route>
      </Routes>
    </>
  );
};

export default NavBar;
