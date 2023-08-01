import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Profile from './components/Profile';

function App() {
  const [jobList, setJobList] = useState([]);

  const [jobData, setJobData] = useState({
    jobTitle: '',
    company: '',
  });

  const handleAddJob = (evt) => {
    evt.preventDefault();
    setJobList([{ ...jobData }]);

    setJobData({
      jobTitle: '',
      company: '',
    });
  };
  console.log(jobList);

  const handleChange = (evt) => {
    setJobData({
      ...jobData,
      [evt.target.name]: evt.target.value,
    });
  };

  return (
    <div className="App">
      <Header />
      <Main
        jobData={jobData}
        handleAddJob={handleAddJob}
        handleChange={handleChange}
      />
    </div>
  );
}

export default App;
