import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import Navbar from "./components/navbar";
import Center from "./components/center";
// import Footer from "./components/footer";
// import Form from "./components/form";
// import Main from "./components/main";
import Inc from "./components/inc";
import Stopwatch from "./components/stopwatch";
import Practice from "./components/practice"
import Generatepass from "./components/generatepass"
import Practice2 from "./components/practice2"

const App=()=>{

  const abhay=()=>{
    alert("hello from the parent")
  }
  return (
  <>
  <Practice2/>
  {/* <Generatepass/> */}

  {/* <Practice/> */}
  {/* <Start/> */}
  {/* <Inc/> */}
  {/* <h1 >hello from the parent component</h1> */}
  
  {/* <Main/> */}
  {/* <Inc/> */}
  {/* <Stopwatch/> */}

  {/* <Navbar/> */}
  {/* <Form/> */}
 

  {/* <Center abhay={abhay}/> */}
  {/* <Footer/> */}
  </>
  );
}

export default App;
