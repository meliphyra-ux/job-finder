import { FC } from 'react';

type JobDescriptionProps = {
  title: string;
  salary: string;
  createdDaysAgo: string;
  description: string;
};

const JobDescription: FC<JobDescriptionProps> = ({
  title,
  salary,
  createdDaysAgo,
  description,
}) => {
  return (
    <section>
      <div className="flex flex-row justify-between relative mt-8">
        <h3 className="section-header max-w-[500px]">{title}</h3>
        <div className="xl:static absolute bottom-[-57px] right-0">
          <h3 className="font-bold">€{salary}</h3>
          <p>Brutto, per year</p>
        </div>
      </div>
      <div>
        <p className="xl:my-[7px] my-[23px] text-[#878D9D] ">
          {createdDaysAgo}
        </p>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default JobDescription;
