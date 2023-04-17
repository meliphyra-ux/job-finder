import JobsList from '../components/JobsList';
import Pagination from '../components/Pagination';

const Jobs = () => {
  return (
    <main className="w-full flex items-center flex-col bg-[#F5F5F5] min-h-screen xl:p-6 py-3">
      <JobsList />
      <Pagination />
    </main>
  );
};

export default Jobs;
