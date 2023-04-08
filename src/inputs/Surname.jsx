import React, { useContext } from 'react';
import { LanguageContext } from "../context/context";

const Surname = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="relative w-full my-4">
        <input type="text" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#2EA295] peer" placeholder=" " required />
        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-200  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#2EA295] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{language === 'cir' ? 'Презиме' : 'Prezime'}</label>
    </div>
  )
}

export default Surname;