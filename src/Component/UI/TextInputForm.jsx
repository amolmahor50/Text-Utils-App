import { useContext, useEffect, useState } from "react";
import { TbArrowsLeftRight } from "react-icons/tb";
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
    handelVoiceSound
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
      setToText("");
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
          <div className="relative">
            {fromText.length === 0 ? (
              ""
            ) : (
              <div>
                <span className={`absolute right-2 top-2`} onClick={(e) => handleCopyText(e.target, "fromText")}>
                  <Tooltip title="Copy">
                    <IconButton>
                      <FaRegCopy className="text-lg"/>
                    </IconButton>
                  </Tooltip>
                </span>
                <span className={`absolute bottom-2 left-2`} onClick={() => handelVoiceSound("fromText")}>
                  <Tooltip title="Voice Speaker">
                    <IconButton>
                      <PiSpeakerHighFill className="text-lg" />
                    </IconButton>
                  </Tooltip>
                </span>
              </div>
            )}
            <span className="absolute bottom-2 right-2 flex items-center gap-2">
              <span className="text-sm">{fromText.length} / 5,000</span>
              <Tooltip title="Edit Changes">
                <IconButton>
                  <BsPencilFill className="text-base" />
                </IconButton>
              </Tooltip>
            </span>
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
            {toText.length === 0 ? (
              ""
            ) : (
              <div>
                <span className={`absolute right-2 top-2`} onClick={(e) => handleCopyText(e.target, "toText")}>
                  <Tooltip title="Copy">
                    <IconButton>
                      <FaRegCopy className="text-lg"/>
                    </IconButton>
                  </Tooltip>
                </span>
                <span className={`absolute bottom-2 left-2`} onClick={() => handelVoiceSound("toText")}>
                  <Tooltip title="Voice Speaker">
                    <IconButton>
                      <PiSpeakerHighFill className="text-lg" />
                    </IconButton>
                  </Tooltip>
                </span>
              </div>
            )}
            <Textarea
              placeholder="Translate Text"
              value={toText}
              disabled
              className="outline-none border rounded-lg p-3 text-base font-normal bg-[#fafafa] no-scrollbar"
              rows="5"
            />
          </div>
        </div>
      </div>
      <FeedBackLink />
    </>
  );
}

export default TextInputForm;
