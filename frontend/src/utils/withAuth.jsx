import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const withAuth = (Component) => {
  const AuthenticatedComponent = (props) => {
    const { userData } = useContext(AuthContext); // Get the user data from the context
    const navigate = useNavigate();

    useEffect(() => {
      // Check if the token is available in localStorage
      const token = localStorage.getItem("token");

      if (!token || !userData) {
        // If no token or userData, redirect to login page with a message
        alert("No Access. Please login first.");
        navigate("/auth");  // Redirect to login page
      }
    }, [navigate, userData]);

    // If token exists, render the protected component
    return <Component {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
