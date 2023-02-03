import React from 'react'
import UploadFile from '../components/UploadFile';

import '../styles/home.css';

function Home() {
  return (
    <div className="main-body">
        <div className="upload-field">
            <UploadFile />
        </div>
    </div>
  )
}

export default Home