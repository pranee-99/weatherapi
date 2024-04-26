import React from 'react'
import img7 from '../images/image1.png'
import config from'../config'

export default function AdminHome() {
  return (
    <div>
       <div className="ph1" style={{ position: 'absolute', zIndex: '-1', width: '100vw', height: '100vh' }}>
    <img style={{width:"100vw",height:"100vh"}} src={img7} alt="LoginImage" />
    </div>
    <h4 style={{ color: 'black', fontSize: '24px', position: 'fixed', bottom: '80px', left: '50%', transform: 'translateX(-50%)' }}>WELCOME ADMIN</h4>

    </div>
  )
}