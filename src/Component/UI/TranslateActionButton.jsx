import React, { useContext, useState } from 'react'
import { MdTranslate } from "react-icons/md";
import { PiImageSquareFill } from "react-icons/pi";
import { IoMdDocument } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import Button from './Buttons';
import { TextContext } from '../../ContextAPI/TextContext';
import { Link } from 'react-router-dom';


// text type translate action like if you want 
export function TranslateActionButton() {
    const [active, setACtive] = useState("Text")

    // translate Button type main header 
    const TranslateTypeButton = [
        {
            type: "Text",
            href: "/",
            icon: <MdTranslate />,
        },
        {
            type: "Images",
            href: "/image",
            icon: <PiImageSquareFill />,
        },
        {
            type: "Documents",
            href: "/document",
            icon: <IoMdDocument />,
        },
        {
            type: "Websites",
            href: "/website",
            icon: <CgWebsite />,
        }
    ]
    return (
        <div className='flex gap-3 my-8 overflow-x-auto no-scrollbar px-4'>
            {TranslateTypeButton.map((button) => (
                <Link
                onClick={() => setACtive(button.type)}
                 to={button.href} key={button.type} className={`flex items-center gap-2 py-2 px-3 border rounded text-sm font-medium text-blue-500 cursor-pointer transition ${active === button.type ? "bg-blue-200" : ""} ${active == button.type ? "" : "hover:bg-blue-50"}`}>
                    {button.icon}
                    <span>{button.type}</span>
                </Link>
            ))}
        </div>
    )
}


// text transforamation button like uppercase, lowecase , remove extra spaces, cleartext
export function TextTrasnlatorButtons() {
    const { setFromText, fromText, showAlert, titleShow } = useContext(TextContext);

    //convert the text to upperCase 
    const handleUpperCase = () => {
        const UpedateText = fromText.toUpperCase();
        setFromText(UpedateText);
        showAlert("Converted to Uppercase");
        titleShow("Text-Uppercase")
    }

    //convert the text in lowerCase 
    const handleLowerCase = () => {
        const UpedateText = fromText.toLowerCase();
        setFromText(UpedateText);
        showAlert("Converted to LowerCase");
        titleShow("Text-Lowecase");
    }

    //inpute in clear text data
    const handleClearText = () => {
        setFromText("");
        showAlert("Clear All Text in textarea");
        titleShow("Text-All-Clear")
    }

    //remove extra space
    const handleExtraSpace = () => {
        const UpedateText = fromText.split(/[ ]+/);
        setFromText(UpedateText.join(" "));
        showAlert("Remove All Extra Space");
        titleShow("Remove Extra Spaces")
    }

    // transalte button data
    const TranslateTextButtons = [
        {
            actionName: "Convert to UpperCase",
            handleClicked: handleUpperCase,
        },
        {
            actionName: "Convert to LowerCase",
            handleClicked: handleLowerCase
        },
        {
            actionName: "Clear Text",
            handleClicked: handleClearText
        },
        {
            actionName: " Remove Extra Spaces",
            handleClicked: handleExtraSpace
        },
    ]

    return (
        <div className='flex items-center flex-wrap gap-2 mt-4 px-4 sm:px-2'>
            {
                TranslateTextButtons.map((action, index) => (
                    <div key={index} onClick={action.handleClicked}>
                        <Button>
                            {action.actionName}
                        </Button>
                    </div>
                ))
            }
        </div>
    )
}

