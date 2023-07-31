import React from 'react'

export default function JobList({jobList}) {
  return (
    <div className='jobList'>

        <table>
            <thead>
                <th> Job Title </th>
                <th> Company Name </th>
            </thead>
            <tbody>
                {
                    jobList.map((job) => (
                        <tr> 
                            <td> {job.jobTitle} </td> 
                            <td> {job.company} </td>  
                        </tr>
                    ))
                }
            </tbody>
        </table>

    </div>
  )
}