import React, { useContext } from 'react';
import { LanguageContext } from "./context/context";

import { Navbar, Applicant, Request, Rules, Footer } from "./components/components";

function App() {
  const { language } = useContext(LanguageContext);

  return (
    <div className="App">
      <Navbar />
      <form action="">
        <div className="w-screen md:w-[640px] px-5 md:px-0 md:mx-auto">
          <Applicant />
        </div>
        <hr className="bg-gray-500 h-[1.2px] text-black" />
        <div className="w-screen md:w-[640px] px-5 md:px-0 md:mx-auto">
          <Request />
          <button type="submit" className='podnesi-zahtev text-2xl px-8 py-4 rounded-2xl mt-4 mx-auto block'>{language === 'cir' ? 'Поднеси захтев' : 'Podnesi zahtev'}</button>
          <Rules />
        </div>
        <hr className="bg-gray-500 h-[1.2px] text-black" />
        <Footer />
      </form>
    </div>
  );
}

export default App;
