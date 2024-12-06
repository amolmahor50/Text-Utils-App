import React, { useState } from 'react'
import { MdTranslate } from "react-icons/md";
import { PiImageSquareFill } from "react-icons/pi";
import { IoMdDocument } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";


const TranslateTypeButton = [
    {
        type: "Text",
        href : "/",
        icon: <MdTranslate/>,
    },
    {
        type: "Images",
        href : "/",
        icon: <PiImageSquareFill/>,
    },
    {
        type: "Documents",
        href : "/",
        icon: <IoMdDocument/>,
    },
    {
        type: "Websites",
        href : "/",
        icon: <CgWebsite/>,
    }
]

function TranslateActionButton() {
const [active, setACtive] = useState("Text")
  return (
    <div className='flex gap-3 my-8 overflow-x-auto no-scrollbar px-4'>
        {TranslateTypeButton.map((button) => (
            <div key={button.type} className={`flex items-center gap-2 py-2 px-3 border rounded text-sm font-medium text-blue-500 cursor-pointer ${active === button.type ? "bg-blue-200" : ""} ${active == button.type ? "" : "hover:bg-blue-50"}`}>
                {button.icon}
                <span>{button.type}</span>
            </div>
        ))}
    </div>
  )
}

export default TranslateActionButton