import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import Navbar from "./components/navbar";
// import Center from "./components/center";
// import Footer from "./components/footer";
// import Form from "./components/form";
// import Main from "./components/main";
import Inc from "./components/inc";
import Stopwatch from "./components/stopwatch";
import Practice from "./components/practice"
import Generatepass from "./components/generatepass"

const App=()=>{
  return (
  <>
  <Generatepass/>

  <Practice/>
  {/* <Start/> */}
  {/* <Inc/> */}
  {/* <h1 >hello from the parent component</h1> */}
  
  {/* <Main/> */}
  <Inc/>
  <Stopwatch/>

  {/* <Navbar/> */}
  {/* <Form/> */}
 

  {/* <Center/> */}
  {/* <Footer/> */}
  </>
  );
}

export default App;
