import React from 'react'
import SignOut from '../subNav/signOut';

import GeneralUserSideBar from '../sidebar/generalUserSidebar';



export default function generalUser() {
  return (
    <div>
        <div>
        <SignOut/>
    </div>
    <div>
    <GeneralUserSideBar/>
    </div>

    </div>
  )
}
