import React from 'react';
import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <div className="profile">
      <div className="user-profile">
        <div className="user-info">
          <h2>Name</h2>
          <h4>Company (if user is employed)</h4>
          <h4>Role (if user is employed)</h4>
        </div>
      </div>
      <div className="resume">
        <h2>Resume</h2>
        <Link to="/resume" element>
          <button>View</button>
        </Link>
        <button>Upload</button>
        <button>Generate CV</button>
      </div>
    </div>
  );
}
