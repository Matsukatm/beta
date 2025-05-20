import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Seedlings from "./components/Seedlings";
import Services from "./components/Services";
import Footer from "./components/Footer";
import AdminOrders from "./components/AdminOrders";
import './styles.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Seedlings />
              <Services />
            </>
          } />
          <Route path="/admin/orders" element={<AdminOrders />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
