import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Center from "./components/center";
import Footer from "./components/footer";
// import Form from "./components/form";
import Main from "./components/main";
import Inc from "./components/inc";
import Stopwatch from "./components/stopwatch";
import Practice from "./components/practice";
import Generatepass from "./components/generatepass";
import Practice2 from "./components/practice2";
import CondComp from "./components/condComp";
import Wishing from "./components/wish_acc";
import Arraymap from "./components/arraymap";
import Form from "./components/form_";
import SLOTM from "./components/slot_machine_game";
import Awesome from "./components/awesomeapp";
// import Abhay from "./components/data";
import Abhay1 from "./components/fron_back";

const App = () => {
  const [name, setname] = useState("abhay");

  // const abhay = () => {
  //   alert("hello from the parent");
  // };
  return (
    <>
      <Abhay1 />
      <h1>
        <center>✨welcome to slot machine game✨</center>
      </h1>
      <div className="style">
        <center>
          <SLOTM x="✨" y="✨" z="✨" />
          <SLOTM x="✨" y="💔" z="☘️" />
          <SLOTM x="💯" y="🥺" z="😒" />
        </center>
      </div>

      <Awesome />

      <Form />
      <Arraymap />
      <Wishing />
      <CondComp />
      <Practice2 />
      <Generatepass />

      <Practice />
      {/* <Start/> */}
      <Inc />
      <h1>hello from the parent component</h1>

      <Main />
      <Inc />
      <Stopwatch />

      <Navbar />
      <Form />

      <Center name={name} setname={setname} />
      <Footer />
    </>
  );
};

export default App;
