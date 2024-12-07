import { useContext } from 'react';
import { TbArrowsLeftRight } from "react-icons/tb";
import { TextContext } from '../../ContextAPI/TextContext';
import { Textarea } from '@headlessui/react';
import { FaRegCopy } from "react-icons/fa6";
import { PiSpeakerHighFill } from "react-icons/pi";
import { IconButton, Tooltip } from '@mui/material';
import { FromLanguageTextArea, MobileArrowLanguagesTextArea, ToLanguageTextArea } from './SelectLanguages';

function TextInputForm() {

  const { fromText, toText, setFromText, setToText } = useContext(TextContext)

  setTimeout(() => {
    setToText(fromText)
  }, 3000);

  return (
    <div className='sm:px-2 px-4 flex sm:flex-row flex-col gap-2 justify-between items-center'>
      <div className='w-full'>

        {/* mobile language selector */}
        <div className='block sm:hidden'>
          <MobileArrowLanguagesTextArea />
        </div>

        {/* desktop languages selector */}
        <div className='hidden sm:block'>
          <FromLanguageTextArea />
        </div>
        <div className='relative'>
          <span className={`absolute right-2 top-2`}>
            <Tooltip title="Copy">
              <IconButton>
                <FaRegCopy className='text-lg sm:text-xl' />
              </IconButton>
            </Tooltip>
          </span>
          <span className={`absolute bottom-2 left-2`}>
            <Tooltip title="Voice Speaker">
              <IconButton>
                <PiSpeakerHighFill className='text-lg sm:text-xl' />
              </IconButton>
            </Tooltip>
          </span>
          <Textarea placeholder="Type your message here."
            value={fromText} onChange={(e) => setFromText(e.target.value)}
            className="outline-none border rounded-lg p-3 text-xl font-normal sm:text-2xl no-scrollbar" rows="5"
          />
        </div>
      </div>

      {/* languages trasnform arrow button */}
      <Tooltip title='Left Right Convert Language'>
        <IconButton>
          <TbArrowsLeftRight className='text-2xl' />
        </IconButton>
      </Tooltip>

      {/* Trasnlator text area */}
      <div className='w-full'>
        <div className='hidden sm:block'>
          <ToLanguageTextArea />
        </div>
        <div className='relative'>
          <span className={`absolute right-2 top-2`}>
            <Tooltip title="Copy">
              <IconButton>
                <FaRegCopy className='text-lg sm:text-xl' />
              </IconButton>
            </Tooltip>
          </span>
          <span className={`absolute bottom-2 left-2`}>
            <Tooltip title="Voice Speaker">
              <IconButton>
                <PiSpeakerHighFill className='text-lg sm:text-xl' />
              </IconButton>
            </Tooltip>
          </span>
          <Textarea placeholder='Translator' value={toText} disabled
            className="outline-none border rounded-lg p-3 text-xl font-normal sm:text-2xl bg-[#fafafa] no-scrollbar" rows="5" />
        </div>
      </div>
    </div>
  )
}

export default TextInputForm;