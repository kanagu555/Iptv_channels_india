import React from 'react'
import './FooterBar.css'

function FooterBar() {
  return (
    <div className='footer-bar'>
        {new Date().getFullYear()} - Made with &nbsp;{" "}
      <i className="bi bi-heart-half" /> &nbsp; by Kanagaraj K
    </div>
  )
}

export default FooterBar