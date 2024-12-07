import React, { useState } from "react";
import "./App.css";
import Navabar from "./Component/ui/Navabar";
import Pages from './Pages'
import About from './page/About'
import Commands from "./page/Commands"
import { Route, Routes } from "react-router-dom";
import { TranslateActionButton } from "./Component/ui/TranslateActionButton";
import Website from "./Component/ui/Website";
import Document from "./Component/ui/Documents";
import Image from "./Component/ui/Images";
import AlertMassage from "./Component/ui/AlertMassage"

function App() {
  const [mode, setmode] = useState("light"); // Wheather dark mod is enable or not..
  const [alert, setAlert] = useState(null);

  //alert the massage handling data
  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000)

  }

  //html title show handling data 
  const titleShow = (massage) => {
    setTimeout(() => {
      document.title = `TextUtils- ${massage}`;
    }, 1000)
  }

  //light mode handling data
  const toggleMode = () => {
    if (mode === "light") {
      setmode('dark');
      document.body.style.backgroundColor = "#393332";
      showAlert("Dark mode has been enable", "Success");
      titleShow("Dark Mode");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = '#fff';
      showAlert("light mode has been enable", "Success");
      titleShow("Light Mode");
    }
  }

  return (
    <div>
      <Navabar />
      <div className="sm:max-w-7xl w-full mx-auto overflow-hidden">
        <TranslateActionButton />
        <AlertMassage/>
        <Routes>
          <Route path="/" element={<Pages />} />
          <Route path="/about" element={<About />} />
          <Route path="/commands" element={<Commands />} />
          <Route path="/website" element={<Website/>}/>
          <Route path="/image" element={<Image/>}/>
          <Route path="/document" element={<Document/>}/>
        </Routes>
      </div>
    </div >
  );
}

export default App;