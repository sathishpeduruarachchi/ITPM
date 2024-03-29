import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Editpost = () => {
  const [postTitle, setPostTitle] = useState('');
  const [description, setDescription] = useState('');
  const [profilePic, setProfilePic] = useState(null);

  const handlePostTitleChange = (e) => {
    setPostTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    setProfilePic(file);
  };

  const handlePost = () => {
    // Handle post submission
    console.log("Post Title:", postTitle);
    console.log("Description:", description);
    console.log("Profile Picture:", profilePic);
  };

  const handleCancel = () => {
    // Handle cancel action
    setPostTitle('');
    setDescription('');
    setProfilePic(null);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2> Edit Post</h2>
      <div style={{ display: 'inline-block', textAlign: 'left', border: '1px solid #ccc', padding: '20px', borderRadius: '10px', backgroundColor: '#fff', width: '700px', marginLeft: '100px', marginBottom: '20px' }}>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="postTitle" style={{ display: 'block' }}>Post Title:</label>
          <input
            type="text"
            id="postTitle"
            value={postTitle}
            onChange={handlePostTitleChange}
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="description" style={{ display: 'block' }}>Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="profilePic" style={{ display: 'block' }}>Add photo:</label>
          <input
            type="file"
            id="profilePic"
            accept="image/*"
            onChange={handleProfilePicChange}
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>
        {profilePic && (
          <div style={{ marginBottom: '20px' }}>
            <img
              src={URL.createObjectURL(profilePic)}
              alt="Profile"
              style={{ maxWidth: '200px', maxHeight: '200px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
          </div>
        )}
        <div style={{ textAlign: 'center' }}>
          <button style={{ marginRight: '5px', backgroundColor: 'blue', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px' }} onClick={handlePost}>Save Changes</button>
          <button style={{ marginLeft: '5px', backgroundColor: 'red', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px' }} onClick={handleCancel}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Editpost;
