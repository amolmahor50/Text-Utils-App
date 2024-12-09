import { useContext } from "react";
import { TextContext } from "../../ContextAPI/TextContext";
import languages from "../languages";
import { TbArrowsLeftRight } from "react-icons/tb";


// type the text in textarea
export function FromLanguageTextArea() {
    const { fromLanguage, setFromLanguage } = useContext(TextContext)
    return (
        <select
            value={fromLanguage} onChange={(e) => setFromLanguage(e.target.value)}
            className='w-2/4 border-2 p-2 mb-2 rounded-lg outline-none no-scrollbar bg-transparent text-sm'>
            {
                Object.entries(languages).map(([code, name]) => (
                    <option className="text-sm" key={code} value={code}>{name}</option>
                ))
            }
        </select>
    )
}

// output show in textarea
export function ToLanguageTextArea() {
    const {toLanguage, setToLanguage } = useContext(TextContext)
    return (
        <select
            value={toLanguage} onChange={(e) => setToLanguage(e.target.value)}
            className='w-2/4 border-2 p-2 mb-2 rounded-lg outline-none no-scrollbar bg-transparent text-sm'>
            {
                Object.entries(languages).map(([code, name]) => (
                    <option className="text-sm" key={code} value={code}>{name}</option>
                ))
            }
        </select>
    )
}

// Mobile view show the both textarea
export function MobileArrowLanguagesTextArea(){
    return(
        <div className="flex gap-8 justify-around items-center">
            <FromLanguageTextArea />
            <TbArrowsLeftRight className='text-2xl' />
            <ToLanguageTextArea/>
        </div>
    )
}