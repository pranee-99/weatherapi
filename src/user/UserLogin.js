import React, { useState } from 'react';
import axios from 'axios';
import { FaUser,FaLock } from "react-icons/fa";
import REG from '../images/image1.jpg';
import './User.css';
import { useNavigate } from 'react-router-dom';  // if we want to navigate from one page to another
import config from'../config'


const UserLogin = ({ onUserLogin }) => {
 
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message,setMessage] = useState("")
  const [error,setError] = useState("")

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try 
    {
      const response = await axios.post(`${config.url}/checkuserlogin`, formData);
      if (response.data!=null) 
      {
        onUserLogin();
        localStorage.setItem('user', JSON.stringify(response.data));

        console.log(response.data)
        navigate("/userhome");
     
      } 
      else 
      {
        setMessage("Login Failed")
        setError("")
      }
    } 
    catch (error) 
    {
      setMessage("")
      setError(error.message)
    }
  };
 
  

  return (
    <div>
      <div className="fullscreen-video">  
        <div className='ph'>
          <img src={REG} alt="Login Image" />
        </div>
        <div className='main'>
          <div id="lp" className="login-page1">
            <b><h2>Login</h2></b>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <label>Enter Email :</label>
                <input
                  style={{
                    backgroundColor: 'transparent',
                    height: '4vh',
                    width: "12vw",
                    borderRadius: '40px',
                  }}
                  type="email"
                  id="idemail"
                  placeholder="Enter Email"
                  
                />
                <FaUser className='icon'/>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <label>Enter Password :</label>
                <input
                  style={{
                    backgroundColor: 'transparent',
                    height: '4vh',
                    width: "12vw",
                    borderRadius: '40px',
                    textEmphasisColor:'black'
                  }}
                  type="password"
                  id="idpw"
                  name="pw"
                  placeholder="Enter Password"
                />
                <FaLock className='icon'/>
              </div>
            </div>
            <button
              id='but'
              onClick={handleSubmit}
              style={{
                borderRadius: "10px",
                color: "black",
                borderColor: "transparent",
                height: "4vh",
                width: "8vw",
                backgroundColor: "lightblue",
              }}
            >
              Submit
            </button>
            <br />
            <br />
            <p>Don't have an account? <a href="/Registration">Register</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;