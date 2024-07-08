import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

// Create the context
const UserContext = createContext();

// Create the provider component
const UserProvider = ({ children }) => {
  const [email, setEmail] = useState('');

  const updateEmail = (newEmail) => {
    setEmail(newEmail);
  };

  return (
    <UserContext.Provider value={{ email, updateEmail }}>
      {children}
    </UserContext.Provider>
  );
};

// Add prop types validation
UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Custom hook to use the user context
const useUserContext = () => useContext(UserContext);

export { UserProvider, useUserContext };
