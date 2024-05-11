import React from 'react';
import SignOut from '../subNav/signOut';
import SideBar from '../sidebar/sidebar';
import ToggleSlider from './sliderImage';
import { useParams } from 'react-router-dom';

export default function OutlineTypesExample() {
  return (
    <>
      <SignOut />
      <div className='d-flex'>
        <div>
          <HomeContent />
        </div>
        <ToggleSlider />
      </div>
    </>
  );
}

function HomeContent() {
  const { userId } = useParams();

  return (
    <div>
      <SideBar userId={userId} />
      {/* Other content of your home page */}
    </div>
  );
}
