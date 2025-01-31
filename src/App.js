import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/sports" element={<News key="sports" pageSize={5} category="sports" />} />
            <Route path="/business" element={<News key="business" pageSize={5} category="business" />} />
            <Route path="/technology" element={<News key="technology" pageSize={5} category="technology" />} />
            <Route path="/entertainment" element={<News key="entertainment" pageSize={5} category="entertainment" />} />
            <Route path="/" element={<News key="general" pageSize={5} category="general" />} />
            <Route path="/health" element={<News key="health" pageSize={5} category="health" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
