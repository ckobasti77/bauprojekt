import React, { useState, useContext } from 'react';
import { LanguageContext } from "../context/context";

const RequestType = () => {
  const { language } = useContext(LanguageContext);
  const [requestType, setRequestType] = useState(null)

  return (
    <>
      <h2 className='text-center mb-4'>{language === 'cir' ? 'Врста захтева' : 'Vrsta zahteva'}</h2>
      <div className='flex gap-x-4 w-full justify-between'>
          <div className='w-3/6'>
            <input type="radio" name="reqType" id="standardan" className='vrsta-zahteva-inputs hidden h-0 w-0'/>
            <label htmlFor="standardan" className='vrsta-zahteva-labels cursor-pointer mx-2 px-3 py-1 rounded-lg w-full inline-flex items-center justify-center' onClick={() => setRequestType()}>{language === 'cir' ? 'Стандардан' : 'Standardan'}</label>
            <p className='w-full mt-2 text-center'>do 3 radna dana <br /> iznos takse za 1 parcelu</p>
          </div>
          <div className="w-3/6">
            <input type="radio" name="reqType" id="hitan" className='vrsta-zahteva-inputs hidden h-0 w-0'/>
            <label htmlFor="hitan" className='vrsta-zahteva-labels cursor-pointer mx-2 px-3 py-1 rounded-lg w-full inline-flex items-center justify-center' onClick={() => setRequestType()}>{language === 'cir' ? 'Хитан' : 'Hitan'}</label>
            <p className='w-full mt-2 text-center'>1 radni dan <br /> iznos takse za 1 parcelu</p>
          </div>
      </div>
    </>
  )
}

export default RequestType