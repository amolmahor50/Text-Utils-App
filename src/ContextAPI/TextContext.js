import { createContext, useState } from "react";

export const TextContext = createContext()

export const TextContextProvider = ({ children }) => {
    const [fromText, setFromText] = useState('');
    const [toText, setToText] = useState('');
    const [fromLanguage, setFromLanguage] = useState('en-GB');
    const [toLanguage, setToLanguage] = useState('hi-IN');
    const [alertMsg, setAlertMsg] = useState(null);


    //html title show handling data 
    const titleShow = (massage) => {
        setTimeout(() => {
            document.title = `Translate | Text-Utils- ${massage}`;
        }, 700)
    }

    // alert massage show 
    const showAlert = (massage) => {
        setAlertMsg(massage);

        setTimeout(() => {
            setAlertMsg(null)
        }, 4000);
    }

    return (
        <TextContext.Provider value={{
            // text action
            fromText, setFromText, toText, setToText,
            
            // popup realted massage
            alertMsg, showAlert, titleShow, 

            // languages provide data
            fromLanguage, setFromLanguage, toLanguage, setToLanguage,

        }}>
            {children}
        </TextContext.Provider>
    )
}