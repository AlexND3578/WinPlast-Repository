import React from 'react';
import './navigation.styles.css';

import Window from '../window/window.component';
import Doors from '../doors/doors.component';
import Blinds from '../blinds/blinds.component';
import Information from '../information/information.component';
import Gallery from '../gallery/gallery.component';
import Contacts from '../contacts/contacts.component';
import AboutUs from '../about_us/about_us.component';

const Navigation = ( )=>{
   return (
      <div className='navigation'>
         <dir>Homepage</dir>
         <Window/>
         <Doors/>
         <Blinds/>
         <Information/>
         <Gallery/>
         <Contacts/>
         <AboutUs/>
      </div>
   );
}

export default Navigation;