import React, { useState } from 'react';
import axios from 'axios';

const FileUploadComponent = () => {
  const [fileResponse, setFileResponse] = useState('');

  const handleFileUpload = async (file) => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await axios.post('/postFile', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setFileResponse(response.data.message);
    } catch (error) {
      console.error('Error uploading file:', error.message);
    }
  };

  return (
    <div>
      <h2>File Response</h2>
      <input type="file" onChange={(e) => handleFileUpload(e.target.files[0])} />
      <p>{fileResponse}</p>
    </div>
  );
};

export default FileUploadComponent;
