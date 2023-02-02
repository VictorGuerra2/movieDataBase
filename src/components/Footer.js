import React from 'react'


export default function Footer() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="footer">
      
      <p>BCIT FWD32 React Movie Database</p>
      <p>by Gabe Kelly, Victor Guerra and Rafael Rivas {getCurrentYear()}</p>
    </footer>
  );
}
  

  
  
