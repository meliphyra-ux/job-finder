import { FC, useState, createContext, ReactNode, useMemo } from 'react';
import { Job } from '../utils/api/fetchData';

type JobsContextProps = {
  jobs: Job[];
  visiblePage: number;
  amountOfPages: number;
  JOBS_ON_PAGE: number;
  setJobs: (jobs: Job[]) => void;
  setVisiblePage: (page: number) => void;
};

type JobsProviderProps = {
  children: ReactNode;
};

const INITIAL_STATE: JobsContextProps = {
  jobs: [],
  visiblePage: 1,
  amountOfPages: 0,
  JOBS_ON_PAGE: 15,
  setJobs: (jobs) => {},
  setVisiblePage: (page) => {},
};

export const JobsContext = createContext(INITIAL_STATE);

const JobsProvider: FC<JobsProviderProps> = ({ children }) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [visiblePage, setVisiblePage] = useState(1);

  const JOBS_ON_PAGE = 15;

  const amountOfPages = useMemo(() => {
    return Math.ceil(jobs.length / JOBS_ON_PAGE);
  }, [jobs]);

  const value = {
    jobs,
    setJobs,
    visiblePage,
    setVisiblePage,
    amountOfPages,
    JOBS_ON_PAGE,
  };
  return <JobsContext.Provider value={value}>{children}</JobsContext.Provider>;
};

export default JobsProvider;
