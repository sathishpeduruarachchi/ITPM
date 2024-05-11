import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Alert, Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export default function GeneralUserUpdate() {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  const [updatedUserData, setUpdatedUserData] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  // Fetch user data
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/general_user/get/${userId}`);
        setUserData(response.data.generalUsers[0]); // Assuming you're fetching a single user
        // Initialize updatedUserData with fetched user data
        setUpdatedUserData(response.data.generalUsers[0]);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [userId]);

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the corresponding field in updatedUserData
    setUpdatedUserData({ ...updatedUserData, [name]: value });
  };

  // Function to handle updating user data
  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/general_user/update/${userId}`, updatedUserData);
      console.log('User data updated:', response.data);
      setShowAlert(true); // Show alert upon successful update
    } catch (error) {
      console.error('Error updating user data:', error);
      // Handle error, display error message, etc.
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h1 className="mt-5 mb-4">Update User Profile</h1>
          {userData && (
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Full Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={updatedUserData.name || ''}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={updatedUserData.email || ''}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </Form.Group>

              <Form.Group controlId="formPhone">
                <Form.Label>Phone:</Form.Label>
                <Form.Control
                  type="text"
                  name="phone_No"
                  value={updatedUserData.phone_No || ''}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
              </Form.Group>
              {/* Add more input fields for other user data if needed */}

              <Button variant="primary" onClick={handleUpdate}>
                Update
              </Button>
            </Form>
          )}
          {showAlert && (
            <Alert className="mt-4" variant="success" onClose={() => setShowAlert(false)} dismissible>
              User data updated successfully!
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
}
