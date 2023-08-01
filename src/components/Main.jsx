import React from 'react';
import Jobs from './Jobs';
import Profile from './Profile';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';

export default function Main({ jobData, handleAddJob, handleChange, jobList }) {
  return (
    <div className="main">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/jobs"
          element={
            <Jobs
              jobData={jobData}
              handleAddJob={handleAddJob}
              handleChange={handleChange}
            />
          }
        />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Jobs
        jobData={jobData}
        handleAddJob={handleAddJob}
        handleChange={handleChange}
        jobList={jobList}
      />

    </div>
  );
}
