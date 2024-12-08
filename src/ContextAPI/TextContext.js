import { createContext, useEffect, useState } from "react";

export const TextContext = createContext()

export const TextContextProvider = ({ children }) => {
    const [fromText, setFromText] = useState('');
    const [toText, setToText] = useState('');
    const [fromLanguage, setFromLanguage] = useState('en-GB');
    const [toLanguage, setToLanguage] = useState("mr-MR");
    const [alertMsg, setAlertMsg] = useState(null);

    //html title show handling data 
    const titleShow = (massage) => {
        setTimeout(() => {
            document.title = `Translate | Text-Utils- ${massage}`;
        }, 700)
    }

    // from textarea and to textarea inside text copy handler
    const copyContent = (text) => {
        navigator.clipboard.writeText(text);
        showAlert("Copy to Text...!");
        titleShow("Copy Text");
    }

    const handleCopyText =(target, id) => {
        if(target) {
          if(id == "from"){
           copyContent(fromText);
          }
          else{
           copyContent(toText);
          }
        }
      }

    // alert massage show 
    const showAlert = (massage) => {
        setAlertMsg(massage);

        setTimeout(() => {
            setAlertMsg(null)
        }, 4000);
    }

    // when i clicked the arrow icon then selected language changed
    const handleExchangeLangArrow = () => {
        let tempValue = fromText;
        setFromText(toText);
        setToText(tempValue);

        let tempLang = fromLanguage;
        setFromLanguage(toLanguage);
        setToLanguage(tempLang);
    }


    return (
        <TextContext.Provider value={{
            // text parsing the data 
            fromText, setFromText, toText, setToText,

            // popup realted massage
            alertMsg, showAlert, titleShow,

            // languages provide data
            fromLanguage, setFromLanguage, toLanguage, setToLanguage,

            // handling data
            handleExchangeLangArrow, handleCopyText, 

        }}>
            {children}
        </TextContext.Provider>
    )
}