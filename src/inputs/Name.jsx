import React, { useContext } from 'react';
import { LanguageContext } from "../context/context";

const Name = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="relative w-full my-4 z-0 group">
        <input type="text" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#2EA295] peer" placeholder=" " required />
        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-200  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#2EA295] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{language === 'cir' ? 'Име' : 'Ime'}</label>
    </div>
    // <div class="relative">
    //   <input type="text" placeholder="Enter your text" class="w-full py-2 pl-4 pr-2 border-2 border-gray-300 rounded-md transition-all duration-300 focus:outline-none focus:border-purple-500" />
    //   <div class="absolute bottom-0 left-0 w-full h-1 bg-gray-300 transition-all duration-300"></div>
    //   <div class="absolute bottom-0 left-0 w-0 h-1 bg-purple-500 transition-all duration-300"></div>
    // </div>

  )
}

export default Name;