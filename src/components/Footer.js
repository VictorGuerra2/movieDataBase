import React from 'react'
// import { getYear } from '../utilities/getDate';


// function Footer() {
//   return (
//     <div>Footer</div>
  
//     )
//   }

export default function Footer() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer>
      
      <p>BCIT FWD32 React Movie Database</p>
      <p>by Gabe Kelly, Victor Guerra and Rafael Rivas {getCurrentYear()}</p>
    </footer>
  );
}
  

  
  
// export default Footer