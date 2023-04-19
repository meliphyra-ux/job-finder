import { useEffect, useState, useContext, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Job } from '../utils/api/fetchData';
import { JobsContext } from '../contexts/JobsContext';
import { calculateDaysAfterCreation } from '../utils/functions/time/calculateDate';
import { onDevelopmentStage } from '../utils/functions/globalFunctions';

import AdditionInfoBlocks from '../components/AdditionInfoBlocks';
import PicturesGroup from '../components/PicturesGroup';
import LocationAndContacts from '../components/LocationAndContacts';

import JobInfoDescription from '../components/JobInfoDescription';
import JobInfoHeader from '../components/JobInfoHeader';
import Button from '../components/Button';

const JobInfo = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { jobs } = useContext(JobsContext);

  const [jobInfo, setJobInfo] = useState<Job | null>(null);

  const createdDaysAgo = useMemo(() => {
    if (jobInfo) return calculateDaysAfterCreation(jobInfo?.createdAt);
    return '';
  }, [jobInfo]);

  useEffect(() => {
    const jobInfo = jobs.filter((job) => job.id === id)[0] ?? null;
    setJobInfo(jobInfo);
    return () => {
      setJobInfo(null);
    };
  }, [jobs]);

  const returnToMainPage = () => navigate('/');

  if (jobInfo === null) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="
    justify-center flex flex-col pt-6 px-4 items-center 
    xl:flex-row xl:pt-[56px] xl:px-[5%] xl:items-start"
    >
      <div className="text-[#3A4562] max-w-[774px] w-full">
        <JobInfoHeader />
        <main className="w-full">
          <JobInfoDescription
            title={jobInfo.title}
            createdDaysAgo={createdDaysAgo}
            salary={jobInfo.salary}
            description={jobInfo.description}
          />
          <Button variant="normal" fn={onDevelopmentStage}>
            Apply now
          </Button>
          <h2 className="section-header">Additional info</h2>
          <AdditionInfoBlocks
            array={jobInfo.employment_type}
            title="Employement type"
            theme="employement"
          />
          <AdditionInfoBlocks
            array={jobInfo.benefits}
            title="Benefits"
            theme="benefits"
          />
          <h2 className="section-header">Attached Images</h2>
          <PicturesGroup pictures={jobInfo.pictures} />
          <Button variant="inverted" fn={returnToMainPage}>
            <span className="mr-[20px] font-bold">{'<'}</span>RETURN TO JOB
            BOARD
          </Button>
        </main>
      </div>
      <h2 className="section-header xl:hidden block w-full max-w-[774px]">
        Contacts
      </h2>
      <LocationAndContacts
        location={jobInfo.location}
        name={jobInfo.name}
        address={jobInfo.address}
        phone={jobInfo.phone}
        email={jobInfo.email}
      />
    </div>
  );
};

export default JobInfo;
