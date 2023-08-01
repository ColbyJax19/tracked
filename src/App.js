import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Profile from './components/Profile';

function App() {
  //Jobs Form
  const [jobData, setJobData] = useState({
    jobTitle: '',
    company: '',
  });
  
  const handleChange = (evt) => {
    setJobData({
      ...jobData,
      [evt.target.name]: evt.target.value,
    });
  };

  //Jobs List
  const [jobList, setJobList] = useState([]);

  const handleAddJob = (evt) => {
    evt.preventDefault();

    setJobList([...jobList, jobData]);
    
    setJobData({
      jobTitle: '',
      company: '',
    });
  };
  
  

  return (
    <div className="App">
      <Header />
      <Main
        jobData={jobData}
        handleAddJob={handleAddJob}
        handleChange={handleChange}
        jobList={jobList}
      />
    </div>
  );
}

export default App;
