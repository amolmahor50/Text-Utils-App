import React, { useState } from 'react'
import { MdTranslate } from "react-icons/md";
import { PiImageSquareFill } from "react-icons/pi";
import { IoMdDocument } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import Button from './Buttons';


const TranslateTypeButton = [
    {
        type: "Text",
        href: "/",
        icon: <MdTranslate />,
    },
    {
        type: "Images",
        href: "/",
        icon: <PiImageSquareFill />,
    },
    {
        type: "Documents",
        href: "/",
        icon: <IoMdDocument />,
    },
    {
        type: "Websites",
        href: "/",
        icon: <CgWebsite />,
    }
]

export function TranslateActionButton() {
    const [active, setACtive] = useState("Text")
    return (
        <div className='flex gap-3 my-8 overflow-x-auto no-scrollbar px-4'>
            {TranslateTypeButton.map((button) => (
                <div key={button.type} className={`flex items-center gap-2 py-2 px-3 border rounded text-sm font-medium text-blue-500 cursor-pointer transition ${active === button.type ? "bg-blue-200" : ""} ${active == button.type ? "" : "hover:bg-blue-50"}`}>
                    {button.icon}
                    <span>{button.type}</span>
                </div>
            ))}
        </div>
    )
}

const TranslateTextButtons = [
    {
        actionName: "Convert to UpperCase"
    },
    {
        actionName: "Convert to LowerCase"
    },
    {
        actionName: "Clear Text"
    },
    {
        actionName: " Remove Extra Spaces"
    },
]

export function TextTrasnlatorButtons() {
    return (
        <div className='flex items-center flex-wrap gap-2 mt-4 px-4 sm:px-2'>
            {
                TranslateTextButtons.map((action, index) => (
                    <Button key={index}>
                        {action.actionName}
                    </Button>
                ))
            }
        </div>
    )
}

