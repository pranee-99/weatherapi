import React, { useState } from 'react';
import axios from 'axios';
import './Registration.css';
import  reg from '../images/image5.avif' 
import config from'../config'

const Registration = () => {
 

  const [formData, setFormData] = useState({
    fullname: '',
    gender: '',
    dateofbirth: '',
    email: '',
    password: '',
    location: '', //this 7 fields are in single object
    contact: ''
  });


  const [message, setMessage] = useState('');

  const [error, setError] = useState('');

  const handleChange = (e) => 
  {


    setFormData({...formData, [e.target.id]: e.target.value});

  };

  const validatePassword = (password) => {
    const minLength = 8; // Minimum password length
    const hasNumber = /\d/.test(password); // Check for at least one digit
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password); // Check for at least one special character

    return password.length >= minLength && hasNumber && hasSpecialChar;
  };

  const validatePhoneNumber = (contact) => {
    const minLength = 10; // Minimum phone number length
    const isNumeric = /^\d+$/.test(contact); // Check for all digits
  
    return contact.length >= minLength && isNumeric;
  };
  

  const handleSubmit = async (e) => 
  {
    e.preventDefault();
    const { password } = formData;
    const { contact} = formData;
    
    if (!validatePassword(password)) {
      setError('Password must be at least 8 characters long and include at least one number and one special character.');
      return; // Prevent form submission if password is invalid
    }
   

    try 
    {
      const response = await axios.post(`${config.url}/insertuser`, formData);
      if (response.status === 200) 
      {
       
        setFormData({
          fullname: '',
          email: '',
          password: '',
          location: '',
          contact: ''
        }
        
        );
      }
      setMessage(response.data);
      setError('');    
      setMessage('Registration Successful!');
        setError('');

    } 
    
    catch(error) 
    {
      setError(error.response.data);
      setMessage(''); 
    }
  };
  

  return (
    <div>
      <div className="fullscreen-video">  
        <div className='ph'>
        <img src={reg} alt="Registration Image" />
        </div>
        <div className='main'>
          <div id="lp" className="login-page2">
            <b><h3 style={{ fontSize: "2rem" }} >Sign Up</h3></b>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
            {message && (
                <p style={{ color: 'black', fontSize:'bold' }}>{message}</p>
              )}
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <label>Enter Name :</label>
                <input
                  value={formData.fullname} onChange={handleChange} required
                  style={{
                    backgroundColor: 'transparent',
                    height: '4vh',
                    width: "14vw",
                    borderRadius: '40px',
                  }}
                  type="text"
                  id="fullname"
                  placeholder="Enter Full Name"
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <label>Enter Email :</label>
                <input
                type="email" id="email" value={formData.email} onChange={handleChange} required
                  style={{
                    backgroundColor: 'transparent',
                    height: '4vh',
                    width: "14vw",
                    borderRadius: '40px',
                  }}
                  
                  id="email"
                  placeholder="  Enter Email"
                
                />
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <label>Enter Password :</label>
                <input
                value={formData.password} onChange={handleChange} required 
                  style={{
                    backgroundColor: 'transparent',
                    height: '4vh',
                    width: "14vw",
                    borderRadius: '40px',
                  }}
                  type="password"
                  id="password"
                  name="pw"
                  placeholder="Setup Password"
                 
                />
              </div>
              {error && (
        <p className="error-message">{error}</p>
      )}

              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <label>Enter Location :</label>
                <input
                 value={formData.location} onChange={handleChange} required
                  style={{
                    backgroundColor: 'transparent',
                    height: '4vh',
                    width: "14vw",
                    borderRadius: '40px',
                  }}
                  type="text"
                  id="location"
                  name="elocation"
                  placeholder="Enter Location "
                 
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <label>Enter Number :</label>
                <input
                 value={formData.contact} onChange={handleChange} required
                  style={{
                    backgroundColor: 'transparent',
                    height: '4vh',
                    width: "14vw",
                    borderRadius: '40px',
                  }}
                  type="number"
                  id="contact"
                  name="contact"
                  placeholder="Enter Contact Number"
                 
                />
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
                width: "13vw",
                backgroundColor: "lightblue",
              }}
            >
              Register
            </button>
            <br />
            <br />
            <h4 style={{ height: "5vh" }}>Have an account?<a href='/UserLogin'> Login</a></h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;