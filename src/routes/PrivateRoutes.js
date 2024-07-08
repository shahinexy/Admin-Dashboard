import Cookies from 'js-cookie';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { jwtDecode } from "jwt-decode";
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Loader from '../layouts/loader/Loader';

const PrivateRoutes = ({ element: Component }) => {

  const cookieValue = Cookies.get('AccessToken');

  const { pathname  } = useLocation();

  const navigate = useNavigate();

  useEffect(() => {

    if (cookieValue) {
      console.log(cookieValue)
      const decoded = jwtDecode(cookieValue);
      console.log(decoded)

      
    }
  }, [cookieValue]);

  if (!cookieValue) {
    return (
      <>
        <Loader />
        <Navigate to='/auth/login' state={{ path: pathname }} replace />
      </>
    );
  }

  return <Component />;
};


PrivateRoutes.propTypes = {
    element: PropTypes.elementType.isRequired,
  };

export default PrivateRoutes;
