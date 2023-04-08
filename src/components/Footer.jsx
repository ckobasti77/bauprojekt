import React from 'react';
import { instagram, facebook } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex flex-wrap justify-between px-12 py-6 md:px-24 lg:px-36'>
      <a className='w-[80px]' href="mailto:office@informacijaolokaciji.rs">office@informacijaolokaciji.rs</a>
      <a className='w-[80px]' href="bauprojekt.rs">BAUPROJEKT</a>
      <div className='flex gap-x-4 w-[80px]'>
        <a href="https://www.instagram.com/bauprojekt_beograd/"><img src={instagram} alt="instagram" className='social-links'/></a>
        <a href="https://www.facebook.com/profile.php?id=100083264962968"><img src={facebook} alt="instagram" className='social-links'/></a>
      </div>
    </div>
  )
}

export default Footer