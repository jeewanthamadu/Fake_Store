import Login from "../pages/session/login";
import React from "react";
import UserRegistration from "../pages/userRegistration";
import {Dashboard} from "@mui/icons-material";
import Product from "../pages/productManage";
import {Route, Routes} from "react-router-dom";


function App() {
  return (
      <>
         {/* <NavBar/>*/}
          <Routes>
              <Route path="/" element={<Dashboard/>}/>
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="/product" element={<Product/>}/>
              <Route path="/cart" element={<Dashboard/>}/>

          </Routes>
      </>
  );
}

export default App;


