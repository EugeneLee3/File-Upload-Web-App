import React, {useState} from 'react';
import axios from 'axios';

import '../styles/upload_file.css'

function UploadFile() {

    const [uploadedFile, setUploadedFile] = useState ('');
    const [fileTitle, setFileTitle] = useState ('');

    function handleFormSubmittion (e) {
        e.preventDefault ();

        let form = document.getElementById ('form');
        let formData = new FormData (form);

        axios.post ('http://localhost:5000/upload', formData);
    }

    function handleFileTitle (e) {
        setFileTitle (e.target.value);
    }

    function handleUploadedFile (e) {
        setUploadedFile (e.target.value);
    }

  return (
    <div className="form-body">
      <div className="title-text">Upload File</div>

      <br />

      <form
        encType="multipart/form-data"
        onSubmit={handleFormSubmittion}
        id="form"
      >
        
        <input
          type="file"
          name="uploadedFile"
          value={uploadedFile}
          onChange={handleUploadedFile}
          required
        />

        <br />
        <br />

        <label>File title:</label><br />
        <input
          type="text"
          placeholder="Enter file title"
          name="fileTitle"
          value={fileTitle}
          onChange={handleFileTitle}
          required
        />

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default UploadFile