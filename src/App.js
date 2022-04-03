import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Catalog from "./components/catalog";
import ShopList from "./components/ShopList";


function App() {
  return (
    <div className="App">
      <Header />
        <Catalog />
        <Footer />
    </div>
  );
}

export default App;
