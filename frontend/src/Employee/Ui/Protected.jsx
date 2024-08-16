import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const Protected = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setIsAuthenticated(false);
        } else {
          const response = await axios.get(
            'http://localhost:6300/api/admin/verifyToken',
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setIsAuthenticated(response.data.success);
          setRole(response.data.decoded.role);
        }
      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated && role === 'admin' ? children : <Navigate to="/login" />;
};

export default Protected;