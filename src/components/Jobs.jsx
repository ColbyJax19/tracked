import React from 'react';
import JobList from './JobList';

export default function Jobs({ jobData, handleAddJob, handleChange, jobList }) {
  return (
    <div className="jobs">
      <form onSubmit={handleAddJob}>
        <input
          type="text"
          placeholder="Job Title"
          name="jobTitle"
          value={jobData.jobTitle}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Company"
          name="company"
          value={jobData.company}
          onChange={handleChange}
        />
        <button type="submit">Add Job</button>
      </form>

      <JobList jobList={jobList}/>
      
    </div>
  );
}
