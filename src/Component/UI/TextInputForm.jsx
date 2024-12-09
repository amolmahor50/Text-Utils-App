import { useContext, useEffect, useState } from "react";
import { TbArrowsLeftRight } from "react-icons/tb";
import { MdKeyboardVoice } from "react-icons/md";
import { IoIosStarOutline } from "react-icons/io";
import { GoShareAndroid } from "react-icons/go";
import { AiOutlineLike } from "react-icons/ai";
import { BsPencilFill } from "react-icons/bs";
import { TextContext } from "../../ContextAPI/TextContext";
import { Textarea } from "@headlessui/react";
import { FaRegCopy } from "react-icons/fa6";
import { PiSpeakerHighFill } from "react-icons/pi";
import { IconButton, Tooltip } from "@mui/material";
import {
  FromLanguageTextArea,
  MobileArrowLanguagesTextArea,
  ToLanguageTextArea,
} from "./SelectLanguages";
import { FeedBackLink } from "./FeedBackLink";
import { Link } from "react-router-dom";

function TextInputForm() {
  const {
    fromText,
    toText,
    setFromText,
    setToText,
    fromLanguage,
    toLanguage,
    handleExchangeLangArrow,
    handleCopyText,
    handelVoiceSound,
    isTyping
  } = useContext(TextContext);


  // handling API and changing the languages
  useEffect(() => {
    let url = `https://api.mymemory.translated.net/get?q=${fromText}&langpair=${fromLanguage}|${toLanguage}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (fromText) {
          setTimeout(() => {
            setToText(data.responseData.translatedText);
          }, 1000);
        }
      });

    if (fromText.length === 0) {
      setTimeout(() => {
        setToText("");
      }, 1000);
    }
  }, [toLanguage, fromLanguage, fromText, toText]);

  return (
    <>
      <div className="sm:px-2 px-4 flex sm:flex-row flex-col gap-2 justify-between items-center">
        <div className="w-full">
          {/* mobile language selector */}
          <div className="block sm:hidden">
            <MobileArrowLanguagesTextArea />
          </div>

          {/* desktop languages selector */}
          <div className="hidden sm:block">
            <FromLanguageTextArea />
          </div>
          <div className="relative ">
            {/* voice translator */}
            <span className={`absolute left-2 bottom-2`}>
              <Tooltip title="Translate by voice">
                <IconButton>
                  <MdKeyboardVoice className="text-lg" />
                </IconButton>
              </Tooltip>
            </span>
            {fromText.length === 0 ? (
              ""
            ) : (
              <div>
                {/* copy text button */}
                <span className={`absolute right-2 top-2`} onClick={(e) => handleCopyText(e.target, "fromText")}>
                  <Tooltip title="Copy">
                    <IconButton>
                      <FaRegCopy className="text-lg" />
                    </IconButton>
                  </Tooltip>
                </span>
                {/* see dictionary */}
                <span className="absolute bottom-11 left-4 text-sm text-blue-400">
                  <Link to="/">See dictionary</Link>
                </span>
                {/* text speaker */}
                <span className={`absolute bottom-2 left-12`} onClick={() => handelVoiceSound("fromText")}>
                  <Tooltip title="Voice Speaker">
                    <IconButton>
                      <PiSpeakerHighFill className="text-lg" />
                    </IconButton>
                  </Tooltip>
                </span>
              </div>
            )}
            {/* text count and pencil */}
            <span className="absolute bottom-2 right-2 flex items-center gap-2">
              <span className="text-sm">{fromText.length} / 5,000</span>
              <Tooltip title="Edit Changes">
                <IconButton>
                  <BsPencilFill className="text-base" />
                </IconButton>
              </Tooltip>
            </span>
            {/* muted textarea */}
            <Textarea
              placeholder="Type your message here."
              value={fromText}
              onChange={(e) => setFromText(e.target.value)}
              className="outline-none border rounded-lg p-3 text-base font-normal no-scrollbar"
              rows="5"
            />
          </div>
        </div>

        {/* languages trasnform arrow button */}
        <Tooltip
          title="Left Right Convert Language"
          onClick={handleExchangeLangArrow}
        >
          <IconButton>
            <TbArrowsLeftRight className="text-2xl" />
          </IconButton>
        </Tooltip>

        {/* Trasnlator text area */}
        <div className="w-full">
          <div className="hidden sm:block">
            <ToLanguageTextArea />
          </div>
          <div className="relative">
            {isTyping === true || fromText.length === 0 ? (
              ""
            ) : (
              <div>
                {/* star text */}
                <span className={`absolute right-2 top-2`} >
                  <Tooltip title="Save">
                    <IconButton>
                      <IoIosStarOutline className="text-lg" />
                    </IconButton>
                  </Tooltip>
                </span>
                {/* text dictionary */}
                <span className="absolute bottom-11 left-4 text-sm text-blue-400">
                  <Link to="/">See dictionary</Link>
                </span>
                {/* speaker text */}
                <span className={`absolute bottom-2 left-2`} onClick={() => handelVoiceSound("toText")}>
                  <Tooltip title="Voice Speaker">
                    <IconButton>
                      <PiSpeakerHighFill className="text-lg" />
                    </IconButton>
                  </Tooltip>
                </span>
                {/* share, like and copy button */}
                <span className="absolute bottom-2 right-2">
                  {/* copy button */}
                  <span onClick={(e) => handleCopyText(e.target, "toText")}>
                    <Tooltip title="Copy">
                      <IconButton>
                        <FaRegCopy className="text-lg" />
                      </IconButton>
                    </Tooltip>
                  </span>
                  {/* like button */}
                  <span>
                    <Tooltip title="Rate">
                      <IconButton>
                        <AiOutlineLike className="text-lg" />
                      </IconButton>
                    </Tooltip>
                  </span>
                  {/* share button */}
                  <span>
                    <Tooltip title="Share">
                      <IconButton>
                        <GoShareAndroid className="text-lg" />
                      </IconButton>
                    </Tooltip>
                  </span>
                </span>
              </div>
            )}
            {/* muted textarea */}
            <Textarea
              placeholder="Translate Text"
              value={toText}
              disabled
              className="outline-none border rounded-lg p-3 text-base font-normal bg-[#fafafa] no-scrollbar"
              rows="5"
            />
            {/* typing logo */}
            {isTyping && <span className="text-sm absolute bottom-3 left-4 text-blue-400 italic">Typing...</span>}
          </div>
        </div>
      </div>
      {/* feedback component */}
      <FeedBackLink />
    </>
  );
}

export default TextInputForm;
