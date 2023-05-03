import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Layout";
import Login from "pages/Login";
import React from "react";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Link to="/login">登录</Link>
        <Link to="/home">首页</Link> */}

        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
