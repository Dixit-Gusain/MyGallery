import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Nature from "./component/Nature";
import Flower from "./component/Flower";
import Night from "./component/Night";
import Home from "./component/Home";
import Footer from "./component/Footer";
import NavBar from "./component/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Nature" element={<Nature />}></Route>
        <Route path="/Flower" element={<Flower />}></Route>
        <Route path="/Night" element={<Night />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
