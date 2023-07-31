import React from 'react';
import Jobs from './Jobs';

export default function Main({ jobData, handleAddJob, handleChange, jobList }) {
  return (
    <div className="main">
      <Jobs
        jobData={jobData}
        handleAddJob={handleAddJob}
        handleChange={handleChange}
        jobList={jobList}
      />
    </div>
  );
}
