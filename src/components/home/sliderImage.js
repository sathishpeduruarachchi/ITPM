import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

import image1308936 from '../../images/1308936.jpg';
import image2005056 from '../../images/2005056.png'
import image2005078 from '../../images/2005078.jpg'
import image2005058 from '../../images/2005058.jpg'
import image2482258 from '../../images/2482258.jpg'
import image417191 from '../../images/417191.jpg'
import image2479714 from '../../images/2479714.jpg'

 
export default function App() {
  return (
    <MDBCarousel showControls showIndicators>
      <MDBCarouselItem itemId={1}>
        <img src={image2005056} className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src={image2005078} className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src={image2005058} className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={4}>
        <img src={image2482258} className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={5}>
        <img src={image417191} className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={6}>
        <img src={image2479714} className='d-block w-100' alt='...' />
      </MDBCarouselItem>
    </MDBCarousel>
  );
}