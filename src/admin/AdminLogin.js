import React, { useState } from 'react';
import './admin.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import img6 from '../images/image6.jpg'
import config from'../config'


export default function AdminLogin({ onAdminLogin }) 
{
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [message,setMessage] = useState("")
  const [error,setError] = useState("")

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name , value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try 
    {
      const response = await axios.post(`${config.url}/checkadminlogin`, formData);
      if (response.data!=null) 
      {
        onAdminLogin(); 

        localStorage.setItem('admin', JSON.stringify(response.data));
        navigate("/adminhome")
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
   
    <div >
     <div className="ph1" style={{ position: 'absolute', zIndex: '-1', width: '100vw', height: '100vh' }}>
    <img style={{width:"100vw",height:"100vh"}} src={img6} alt="LoginImage" />
    </div>

      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      }
      <form onSubmit={handleSubmit} >
        <div>
          <label style={{ color: 'white' }} >Username</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div>
          <label style={{ color: 'white' }}>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit" className="button">Login</button>
      </form>
    </div>

  );
}