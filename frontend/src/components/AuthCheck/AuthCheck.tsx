import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../../services/auth';

export const AuthCheck: React.FC<any> = ({ children, title }) => {
  if (isAuthenticated()) {
    return <div>{children}</div>;
  } else {
    const navigate = useNavigate();
    useEffect(() => {
      navigate('/login', { replace: true });
    });

    return <div>{children}</div>;
  }
};
