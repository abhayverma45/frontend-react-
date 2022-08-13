import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/navbar";
import Center from "./components/center";
import Footer from "./components/footer";
import Form from "./components/form"

const App=()=>{
  return (
  <>
  <h1 >hello from the parent component</h1>
  
  

  <Navbar/>
  <Form/>
 

  <Center/>
  <Footer/>
  </>
  );
}

export default App;
