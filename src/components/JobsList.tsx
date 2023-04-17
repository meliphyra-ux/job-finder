import { useState, useEffect, useContext } from 'react';
import { Job } from '../utils/api/fetchData';

import { JobsContext } from '../contexts/JobsContext';

import JobBlock from './JobBlock';

const JobsList = () => {
  const { jobs, visiblePage, JOBS_ON_PAGE } = useContext(JobsContext);
  const [displayedJobs, setDisplayedJobs] = useState<Job[]>([]);

  useEffect(() => {
    const startDisplayedItems = (visiblePage - 1) * JOBS_ON_PAGE;
    const endDisplayedItems = (visiblePage - 1) * JOBS_ON_PAGE + JOBS_ON_PAGE;

    setDisplayedJobs([...jobs.slice(startDisplayedItems, endDisplayedItems)]);

    return () => {
      setDisplayedJobs([]);
    };
  }, [visiblePage, jobs]);

  return (
    <>
      {displayedJobs.map((job) => (
        <JobBlock
          key={job.id}
          id={job.id}
          pictrure={job.pictures[0]}
          title={job.title}
          name={job.name}
          address={job.address}
          createdAt={job.createdAt}
        />
      ))}
    </>
  );
};

export default JobsList;
