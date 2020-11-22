import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import AboutPage from "./components/pages/AboutPage";
import Contact from "./components/pages/ContactPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/pages/HomePage";
import Blog from "./components/pages/Blog";
import './App.css';

function App() {
  return (
    <Router>
    <div>
      <Header />
      <Nav />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/contact" component={Contact} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
