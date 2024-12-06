import NavTabs from './ui/NavTab';
import { TbArrowsLeftRight } from "react-icons/tb";


function TextInputForm() {
  return (
    <div className='sm:px-2 px-4 flex sm:flex-row flex-col gap-2 justify-between items-center'>
      <div className='w-full'>
         <div className='sm:block hidden'>
          <NavTabs />
        </div>
        <div className=''>
          <textarea placeholder='Enter Text her..' className="outline-none border rounded-lg p-3 text-xl font-normal sm:text-2xl no-scrollbar" rows="5"></textarea>
        </div>
      </div>
      <TbArrowsLeftRight className='cursor-pointer size-8 sm:size-16 sm:mt-6'/>
      <div className='w-full'>
        <div className='sm:block hidden'>
          <NavTabs />
        </div>
        <div className=''>
          <textarea disabled placeholder='Translate' className="outline-none border rounded-lg p-3 text-xl font-normal sm:text-2xl bg-[#fafafa] no-scrollbar" rows="5"></textarea>
        </div>
      </div>
    </div>
  )
}

export default TextInputForm;