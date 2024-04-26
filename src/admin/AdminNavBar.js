import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import './admin.css'
import { useNavigate } from 'react-router-dom';
import AdminHome from './AdminHome';
import ViewUser from './ViewUsers';
import AddWeather from './AddWeather';
import config from'../config'

export default function AdminNavBar() 
{
 const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    localStorage.removeItem('admin');
    navigate('/adminlogin');
    window.location.reload()
  };

  return (
    <div>

    <nav className="navbar">
     <ul>
     <Link to="/adminhome">Home</Link>
     <Link to="/viewusers">View Users</Link>
     <Link to="/addweather">Add Weather</Link>
     
     <li><button className="logoutButton" onClick={handleLogout}>Logout</button></li>

     </ul>
     </nav>

         <Routes>
         <Route path="/adminhome" Component={AdminHome} exact/>
         <Route path="/viewusers" Component={ViewUser} exact/>
         <Route path="/addweather" Component={AddWeather} exact/>
        </Routes>

    </div>
  )
}