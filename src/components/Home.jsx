import React from 'react';

export default function Home({ jobList }) {
  if (!jobList) {
    return <div className="home-header jobs">Nothing to show here...</div>;
  }
  return (
    <div className="home">
      <div className="home-header">
        <h2>Jobs Kanban</h2>
        <ul className="jobs">
          {jobList.map((job) => {
            return (
              <li key={job.company}>
                <p>{job.company}</p>
                <p>{job.jobTitle}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
// {
//   jobList.map((job) => (
//     <tr>
//       <td> {job.jobTitle} </td>
//       <td> {job.company} </td>
//     </tr>
//   ));
// }
