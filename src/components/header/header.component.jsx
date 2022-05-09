import React from 'react';
import Navigation from '../navigation/navigation.component';

const Header = ()=> {
   return (
      <div className='header'>
         <div className='header-info'>
         <h1>WINDOWS PLAST</h1>
         <h2>Phone: 053-467-2104</h2>
         <h2>Work time: 9:00am - 06:00pm</h2>
         <h2>Office: Rishon Le Zion</h2>
         </div>
         <Navigation/>
      </div>
      
   );
}

export default Header;