import React from 'react'
// import REG from '../images/image2.jpg';
import Air from '../images/one.webm';
import './Home.css'
import config from'../config'


export default function Home() {
  return (
    <div>
      <div className="fullscreen-video">
        <div className='vid'>
          <video autoPlay muted loop id="background-video">
            <source src={Air} type="video/webm" />
          </video>
        </div>

      {/* <div style={{ position: 'relative' }}>
      <img src={REG} alt="homepage" width="1450" height="600" />
      <div style={{ position: 'absolute', top: '50%', left: '10%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'orange', fontSize: '40px' ,fontWeight:'bolder'}}>
          Clima Cast
       
      </div><br/><br/><br/> */}
      {/* <div style={{ position: 'absolute', top: '60%', left: '10%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', fontSize: '40px' ,fontWeight:'bolder'}}>
      our Weather, Your Way
       
      </div> */}
    </div>
    </div>
    
  )
}