import { FC, useContext, useEffect, useState } from "react";
import { fetchData, Job } from "./utils/api/fetchData";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Jobs from "./pages/Jobs";
import JobInfo from "./pages/JobInfo";
import { JobsContext } from "./contexts/JobsContext";

const App: FC = () => {
  const { setJobs } = useContext(JobsContext)

  useEffect(() => {
    fetchData().then((res) => {
      setJobs(res);
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Jobs />} />
        <Route path="/:id" element={<JobInfo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
