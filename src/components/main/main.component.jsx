import React from 'react';
import { mainDiscribe } from '../../utils/constants';
import ImageSlider from '../image-slider/ImageSlider.component';
import { slidersOfWindows } from '../../utils/constants';


const Main = () => {
   return (
      <div className='main'>
         <div className='right'><p>{mainDiscribe}</p></div>
         <div className='left'>  <ImageSlider slides={slidersOfWindows}/></div>
        
      </div>
   );
}

export default Main;