import React from 'react';

export default function Jobs({ jobData, handleAddJob, handleChange }) {
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
    </div>
  );
}
