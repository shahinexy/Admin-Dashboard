import Cookies from 'js-cookie';
import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../layouts/loader/Loader';

const PrivateRoutes = ({ element: Component }) => {

  const cookieValue = Cookies.get('AccessToken');
  const location = useLocation();

  if (!cookieValue) {
    return (
      <>
        <Loader />
        <Navigate to='/auth/login' state={{ from: location }} replace />
      </>
    );
  }

  return <Component />;
};


PrivateRoutes.propTypes = {
    element: PropTypes.elementType.isRequired,
  };

export default PrivateRoutes;
