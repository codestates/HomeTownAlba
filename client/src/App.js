import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Register from "./component/register";
import axios from "axios";

function App() {
 
 

  return (
    <BrowserRouter>
     
      <Route exact path="/register" component={Register} />
     
    </BrowserRouter>
  );
}

export default App;
