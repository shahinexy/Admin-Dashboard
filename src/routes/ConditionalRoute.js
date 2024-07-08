import React, { useEffect } from 'react';
import { jwtDecode } from "jwt-decode";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import LoginFormik from '../views/auth/LoginFormik';


const ConditionalRoute = () => {
  const navigate = useNavigate();
  const cookieValue = Cookies.get('AccessToken');

  useEffect(() => {
    console.log("test")
    if (cookieValue) {
      console.log(cookieValue)
      const decoded = jwtDecode(cookieValue);
      console.log(decoded)
      navigate('/dashboards/minimal');
      
    }
  }, [cookieValue, navigate]);

  return !cookieValue ? <LoginFormik /> : null;
};

export default ConditionalRoute;
