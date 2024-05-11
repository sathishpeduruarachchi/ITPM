import React, { useState } from 'react';
import SignOut from '../subNav/signOut';
import GeneralUserSideBar from '../sidebar/generalUserSidebar';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBFile } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useParams } from 'react-router-dom';


export default function GeneralUser() {
  const { userId } = useParams();
  const [formData, setFormData] = useState({
    phone_No: '',
    name: '',
    email: '',
    education_Capacity: '',
    job_Category: '',
    work_experience: '',
    other_skils: '',
    //choose_file: null,
    //image: null
  });

  const [phoneError, setPhoneError] = useState('');
  const [nameError, setNameError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (name === 'phone_No') {
      validatePhoneNumber(value);
    } else if (name === 'name') {
      validateName(value);
    }
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0]
    });
  };

  const validatePhoneNumber = (phone) => {
    if (!/^(\+94)[0-9]{0,9}$/.test(phone)) {
      setPhoneError('Phone number must start with "+94" and be followed by up to 9 digits.');
    } else {
      setPhoneError('');
    }
  };

  const validateName = (name) => {
    if (!/^[A-Z][a-zA-Z\s]*$/.test(name)) {
      setNameError('Name must start with a capital letter.');
    } else {
      setNameError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      alert('Please fill out all required fields correctly.');
      return;
    }
    try {
      const response = await axios.post('http://localhost:3000/general_user/add', {
        signupUserId: userId,
        ...formData
      });
      console.log(response.data);
      if (response.status === 200) {
        alert('Form submitted successfully!');
        // Clear form fields after successful submission
        setFormData({
          phone_No: '',
          name: '',
          email: '',
          education_Capacity: '',
          job_Category: '',
          work_experience: '',
          other_skils: '',
          choose_file: null,
          image: null
        });
      } else {
        alert('Form submission failed!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Form submission failed!');
    }
  };

  const validateForm = () => {
    return (
      formData.phone_No &&
      formData.name &&
      formData.email &&
      formData.education_Capacity &&
      formData.job_Category &&
      formData.work_experience &&
      formData.other_skils &&
      !phoneError &&
      !nameError
    );
  };

  return (
    <>
      <SignOut />
      <div className='d-flex'>
        <div>
          <GeneralUserSideBar userId={userId}/>
        </div>
        <MDBContainer fluid>
          <MDBRow className=' justify-content-center align-items-center'>
            <MDBCol lg='11' className='my-3'>
              <h1 className="text-white mb-4">Add General Information</h1>
              <MDBCard>
                <MDBCardBody className='px-4'>
                  <form onSubmit={handleSubmit}>
                    <MDBRow className='align-items-center pt-4 pb-3'>
                      <MDBCol md='3' className='ps-5'>
                        <h6 className="mb-0">Full Name :</h6>
                      </MDBCol>
                      <MDBCol md='9' className='pe-5'>
                        <MDBInput label='' size='lg' id='form1' type='text' placeholder='Enter your name' name='name' value={formData.name} onChange={handleChange} />
                        {nameError && <div className="text-danger">{nameError}</div>}
                      </MDBCol>
                    </MDBRow>
                    <hr className="mx-n3" />
                    <MDBRow className='align-items-center pt-4 pb-3'>
                      <MDBCol md='3' className='ps-5'>
                        <h6 className="mb-0">Email Address :</h6>
                      </MDBCol>
                      <MDBCol md='9' className='pe-5'>
                        <MDBInput label='' size='lg' id='form2' type='email' placeholder='example@example.com' name='email' value={formData.email} onChange={handleChange} />
                      </MDBCol>
                    </MDBRow>
                    <hr className="mx-n3" />
                    <MDBRow className='align-items-center pt-4 pb-3'>
                      <MDBCol md='3' className='ps-5'>
                        <h6 className="mb-0">Phone Number :</h6>
                      </MDBCol>
                      <MDBCol md='9' className='pe-5'>
                        <MDBInput label='' size='lg' id='form3' type='text' placeholder='+94760000000' name='phone_No' value={formData.phone_No} onChange={handleChange} />
                        {phoneError && <div className="text-danger">{phoneError}</div>}
                      </MDBCol>
                    </MDBRow>
                    <hr className="mx-n3" />
                    <MDBRow className='align-items-center pt-4 pb-3'>
                      <MDBCol md='3' className='ps-5'>
                        <h6 className="mb-0">Education Capacity :</h6>
                      </MDBCol>
                      <MDBCol md='9' className='pe-5'>
                        <MDBInput label='' size='lg' id='form4' type='text' placeholder='BSc (Hons) in Information Technology Specialising in Software Engineering' name='education_Capacity' value={formData.education_Capacity} onChange={handleChange} />
                      </MDBCol>
                    </MDBRow>
                    <hr className="mx-n3" />
                    <MDBRow className='align-items-center pt-4 pb-3'>
                      <MDBCol md='3' className='ps-5'>
                        <h6 className="mb-0">Job Category :</h6>
                      </MDBCol>
                      <MDBCol md='9' className='pe-5'>
                        <MDBInput label='' size='lg' id='form5' type='text' placeholder='Intern' name='job_Category' value={formData.job_Category} onChange={handleChange} />
                      </MDBCol>
                    </MDBRow>
                    <hr className="mx-n3" />
                    <MDBRow className='align-items-center pt-4 pb-3'>
                      <MDBCol md='3' className='ps-5'>
                        <h6 className="mb-0">Work Experience :</h6>
                      </MDBCol>
                      <MDBCol md='9' className='pe-5'>
                        <MDBInput label='' size='lg' id='form6' type='text' placeholder='Year range' name='work_experience' value={formData.work_experience} onChange={handleChange} />
                      </MDBCol>
                    </MDBRow>
                    <hr className="mx-n3" />
                    <MDBRow className='align-items-center pt-4 pb-3'>
                      <MDBCol md='3' className='ps-5'>
                        <h6 className="mb-0">Other Skills :</h6>
                      </MDBCol>
                      <MDBCol md='9' className='pe-5'>
                        <MDBInput label='' size='lg' id='form7' type='text' placeholder='Talking' name='other_skils' value={formData.other_skils} onChange={handleChange} />
                      </MDBCol>
                    </MDBRow>
                    <hr className="mx-n3" />
                    {/* <MDBRow className='align-items-center pt-4 pb-3'>
                      <MDBCol md='3' className='ps-5'>
                        <h6 className="mb-0">Upload CV</h6>
                      </MDBCol>
                      <MDBCol md='9' className='pe-5'>
                        <MDBFile size='lg' id='customFile' />
                        <div className="small text-muted mt-2">Upload your CV/Resume or any other relevant file. Max file size 2 MB</div>
                      </MDBCol>
                    </MDBRow>
                    <hr className="mx-n3" />
                    <MDBRow className='align-items-center pt-4 pb-3'>
                      <MDBCol md='3' className='ps-5'>
                        <h6 className="mb-0">Upload Img</h6>
                      </MDBCol>
                      <MDBCol md='9' className='pe-5'>
                        <MDBFile size='lg' id='customFile' />
                        <div className="small text-muted mt-2">Upload your picture or any frame. Max file size 5 MB</div>
                      </MDBCol>
                    </MDBRow> */}
                    <hr className="mx-n3" />
                    <MDBBtn type='submit' className='my-4' size='lg'>Submit</MDBBtn>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
}
