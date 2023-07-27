import React from 'react';
import Jobs from './Jobs';

export default function Main({ jobData, handleAddJob, handleChange }) {
  return (
    <div className="main">
      <Jobs
        jobData={jobData}
        handleAddJob={handleAddJob}
        handleChange={handleChange}
      />
    </div>
  );
}
