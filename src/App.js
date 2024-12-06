import React,{useState} from "react";
import "./App.css";
import Navabar from "./Component/UI/Navabar";
import TextForm from "./Component/TextForm";
import Alert from "./Component/Alert";
import TextInputForm from "./Component/TextInputForm";

function App() {
  const [mode, setmode] = useState("light"); // Wheather dark mod is enable or not..
  const [alert, setAlert] = useState(null);


  //alert the massage handling data
  const showAlert = (massage, type) => {
    setAlert({
      msg : massage,
      type : type
    });
    setTimeout(() => {
      setAlert(null);
    },3000)  

  }

  //html title show handling data 
  const titleShow = (massage) => {
    setTimeout(() => {
      document.title = `TextUtils- ${massage}`;
    },700)
  }

  //light mode handling data
  const toggleMode = () =>{
    if(mode === "light"){
      setmode('dark');
      document.body.style.backgroundColor = "#393332";
      showAlert("Dark mode has been enable", "Success");
      titleShow("Dark Mode");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = '#fff';
      showAlert("light mode has been enable", "Success");
      titleShow("Light Mode");
    }
  }

  return (
    <div>
      {/* <Navabar mode= {mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-4">
        <TextForm showAlert= {showAlert} titleShow= {titleShow} heading= "Try TextUtils- Convert UpperCase to LowerCase, LowerCase to UpperCase, Word Counter, Character Counter, Copy Text, Remove Extra Spaces " mode= {mode} />
      </div>  */}
      <Navabar/>
      {/* <TextInputForm/> */}
    </div>
  );
}

export default App;