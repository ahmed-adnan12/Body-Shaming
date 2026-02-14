import React, { useState } from 'react';
import Landing from './Components/Landing';
import AdminPage from './components/AdminPage';


function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  // Check if URL contains /admin
  React.useEffect(() => {
    if (window.location.pathname.includes('/admin')) {
      setCurrentPage('admin');
    }
  }, []);

  // Handle admin route
  const handleAdminAccess = () => {
    setCurrentPage('admin');
    window.history.pushState({}, '', '/admin');
  };

  const handleBackToHome = () => {
    setCurrentPage('landing');
    window.history.pushState({}, '', '/');
  };

  if (currentPage === 'admin') {
    return <AdminPage />;
  }

  return (
    <>
      <Landing/>
      {/* Hidden admin button - can be accessed via URL directly */}
      {/* To access: go to yoursite.com/admin */}
    </>
  );
}

export default App;
