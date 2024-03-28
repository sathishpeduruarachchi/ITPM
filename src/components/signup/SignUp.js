import React, { useState } from 'react';
import Submenu from '../subNav/submenu';
import axios from 'axios';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from 'mdb-react-ui-kit';

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
    gender: '',
    password: '',
    confirmPassword: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, dateOfBirth, gender, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      return alert("Passwords do not match");
    }
    if (password.length < 6) {
      return alert("Password must be at least 6 characters long");
    }

    axios.post('http://localhost:3000/signup/add', formData)
      .then(response => {
        console.log(response.data);
        setSuccessMessage("Signup successful!");
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          dateOfBirth: '',
          gender: '',
          password: '',
          confirmPassword: '',
        });
        // Navigate to the home page
        window.location.href = '/home';
      })
      .catch(error => {
        console.error(error);
        alert("Error occurred while saving data to the database");
      });
  };

  return (
    <>
    <div><Submenu/></div>
    <MDBContainer fluid>
              <MDBRow className='justify-content-center align-items-center m-5'>
                  <MDBCard>
                      <MDBCardBody className='px-4'>
                          <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                          {successMessage && (
                              <div className="alert alert-success" role="alert">
                                  {successMessage}
                              </div>
                          )}
                          <form onSubmit={handleSubmit}>
                              <MDBRow>
                                  <MDBCol md='6'>
                                      <MDBInput
                                          wrapperClass='mb-4'
                                          label='First Name'
                                          size='lg'
                                          id='firstName'
                                          type='text'
                                          name='firstName'
                                          value={formData.firstName}
                                          onChange={handleChange} />
                                  </MDBCol>
                                  <MDBCol md='6'>
                                      <MDBInput
                                          wrapperClass='mb-4'
                                          label='Last Name'
                                          size='lg'
                                          id='lastName'
                                          type='text'
                                          name='lastName'
                                          value={formData.lastName}
                                          onChange={handleChange} />
                                  </MDBCol>
                              </MDBRow>
                              <MDBRow>
                                  <MDBCol md='6'>
                                      <MDBInput
                                          wrapperClass='mb-4'
                                          label='Email'
                                          size='lg'
                                          id='email'
                                          type='email'
                                          name='email'
                                          value={formData.email}
                                          onChange={handleChange} />
                                  </MDBCol>
                                  <MDBCol md='6'>
                                      <MDBInput
                                          wrapperClass='mb-4'
                                          label='Birthday'
                                          size='lg'
                                          id='dateOfBirth'
                                          type='text'
                                          name='dateOfBirth'
                                          value={formData.dateOfBirth}
                                          onChange={handleChange} />
                                  </MDBCol>
                                  <MDBCol md='6' className='mb-4'>
                                      <h6 className="fw-bold">Gender: </h6>
                                      <select
                                          className="form-select form-select-lg mb-4"
                                          name='gender'
                                          value={formData.gender}
                                          onChange={handleChange}
                                      >
                                          <option disabled selected>Choose Gender</option>
                                          <option value="female">Female</option>
                                          <option value="male">Male</option>
                                          <option value="other">Other</option>
                                      </select>
                                  </MDBCol>
                              </MDBRow>
                              <MDBRow>
                                  <MDBCol md='6'>
                                      <MDBInput
                                          wrapperClass='mb-4'
                                          label='Password'
                                          size='lg'
                                          id='password'
                                          type='password'
                                          name='password'
                                          value={formData.password}
                                          onChange={handleChange} />
                                  </MDBCol>
                                  <MDBCol md='6'>
                                      <MDBInput
                                          wrapperClass='mb-4'
                                          label='Confirm Password'
                                          size='lg'
                                          id='confirmPassword'
                                          type='password'
                                          name='confirmPassword'
                                          value={formData.confirmPassword}
                                          onChange={handleChange} />
                                  </MDBCol>
                              </MDBRow>
                              <MDBBtn type='submit' className='mb-4' size='lg'>Submit</MDBBtn>
                          </form>
                      </MDBCardBody>
                  </MDBCard>
              </MDBRow>
          </MDBContainer>
          </>
  );
}
