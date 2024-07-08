import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import LoginFormik from '../views/auth/LoginFormik';

const ConditionalRoute = () => {
  const navigate = useNavigate();
  const cookieValue = Cookies.get('AccessToken');

  useEffect(() => {
    if (cookieValue) {
      navigate('/dashboards/minimal');
    }
  }, [cookieValue, navigate]);

  return !cookieValue ? <LoginFormik /> : null;
};

export default ConditionalRoute;
