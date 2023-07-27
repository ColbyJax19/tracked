import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <h3>Home</h3>
      </Link>
      <Link to="/jobs">
        <h3>Jobs</h3>
      </Link>
      <Link to="/profile">
        <h3>Profile</h3>
      </Link>
    </div>
  );
}
