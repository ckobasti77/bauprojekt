import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-wrap justify-between px-12 md:px-24 lg:px-36'>
      <a href="mailto:office@informacijaolokaciji.rs">office@informacijaolokaciji.rs</a>
      <a href="bauprojekt.rs">BAUPROJEKT</a>
      <div>
        <a href="https://www.instagram.com/bauprojekt_beograd/">Instagram</a>
        {" "}/{" "}
        <a href="https://www.facebook.com/profile.php?id=100083264962968">Facebook</a>
      </div>
    </div>
  )
}

export default Footer