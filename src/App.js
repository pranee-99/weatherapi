//import logo from './logo.svg';
//import './App.css';

import { BrowserRouter as Router } from "react-router-dom";
import MainNavBar from './main/MainNavBar';
import AdminNavBar from "./admin/AdminNavBar";
import React, { useState, useEffect } from 'react';


function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => { // this part of the code without refreshing the entire wheenver there  is change the component will be rendered automatically
    const adminLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
    const userLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
    
    
    setIsAdminLoggedIn(adminLoggedIn);
    setIsUserLoggedIn(userLoggedIn);
   
  }, []);

  const onAdminLogin = () => {
    localStorage.setItem('isAdminLoggedIn', 'true');
    setIsAdminLoggedIn(true);
  };

  const onUserLogin = () => {
    localStorage.setItem('isJobSeekerLoggedIn', 'true');
    setIsUserLoggedIn(true);
  };

  return (
    <div className="App">
         
      {/* <Router>
        <MainNavBar/>
        <AdminNavBar/>
      </Router>     */}
      
        <Router>
        {isAdminLoggedIn ? (
          <AdminNavBar />
        ) : isUserLoggedIn ? (
          <MainNavBar />
        ) : (
          <MainNavBar
            onAdminLogin={onAdminLogin}  //they are props , where value is function
            onUserLogin={onUserLogin}
           
          />
        )}
      </Router>
    </div>
  );
}

export default App;