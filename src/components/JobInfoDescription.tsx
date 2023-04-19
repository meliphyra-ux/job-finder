import { FC } from 'react';

type JobInfoDescriptionProps = {
  title: string;
  salary: string;
  createdDaysAgo: string;
  description: string;
};

const JobInfoDescription: FC<JobInfoDescriptionProps> = ({
  title,
  salary,
  createdDaysAgo,
  description,
}) => {
  return (
    <section>
      <div className="flex flex-row justify-between relative mt-4">
        <h3 className="section-header max-w-[500px]">{title}</h3>
      </div>
      <div className='flex w-full justify-between items-center'>
        <p className="text-[#878D9D]">
          {createdDaysAgo}
        </p>
        <aside>
          <h3 className="font-bold">€{salary}</h3>
          <p>Brutto, per year</p>
        </aside>
      </div>
        <p className='mt-4'>{description}</p>
    </section>
  );
};

export default JobInfoDescription;
