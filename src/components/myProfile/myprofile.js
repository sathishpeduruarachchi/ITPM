import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Allgeneraluser from '../generalUser/AllgeneralUser'; // Import the Allgeneraluser component
import { useParams } from 'react-router-dom';

export default function Myprofile() {
  const [userData, setUserData] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/general_user/get/${userId}`);
        setUserData(response.data.generalUsers[0]); // Assuming you're fetching a single user
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
  
    fetchUserData();
  }, [userId]);

  return (
    <div>
      <br/>
      {/* Render the Allgeneraluser component and pass userData as a prop */}
      {userData && <Allgeneraluser userData={userData} />}
    </div>
  );
}
