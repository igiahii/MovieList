import React from "react";
import Movies from "./component/Routes/movies";
import Navbar from "./component/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Routes/login";
import SignUp from "./component/Routes/signup";

function MainRoute() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div style={{overflow :"hidden" , height:"100vh"}} className="content">
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Movies />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<SignUp />} />
          </Routes>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default MainRoute;
