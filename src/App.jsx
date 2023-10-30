import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "../src/component/Header";
import Body from "../src/component/Body";
import Footer from "../src/component/Footer";


function App({ datas }) {
  return (
    <div className="container w-75">
      <Header />
      <Body datas={datas} />
      <Footer />
    </div>
  );
}

export default App;
