import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { calculateDaysAfterCreation } from '../utils/functions/time/calculateDate';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

type JobBlockProps = {
  id: string;
  pictrure: string;
  title: string;
  name: string;
  createdAt: string;
  address: string;
};

const JobBlock: FC<JobBlockProps> = ({
  id,
  pictrure,
  title,
  name,
  createdAt,
  address,
}) => {
  const [createdDaysAgo, setCreatedDaysAgo] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    let daysAfterCreation = calculateDaysAfterCreation(createdAt);
    setCreatedDaysAgo(daysAfterCreation);
  }, []);

  const navigateToJobInfo = () => {
    navigate(`/${id}`);
  };

  return (
    <figure className="job-block shadow-box" onClick={navigateToJobInfo}>
      <LazyLoadImage
        className="aspect-square rounded-full min-w-[66px]"
        wrapperClassName="mr-[26px]"
        width={85}
        src={pictrure}
        effect="blur"
        alt={title}
      />
      <div className="xl:my-0 my-6 w-3/4 cursor-pointer">
        <h3 className="font-bold text-base w-full xl:block hidden">{title}</h3>
        <h3 className="text-base w-full xl:hidden block">
          {title.split(' ', 8).join(' ') + '...'}
        </h3>
        <p className="job-block-info">{name}</p>
        <p className="job-block-info">{address}</p>
      </div>
      <div className="flex flex-col min-h-[100px] w-fit items-end ml-auto text-base justify-between absolute top-4 right-4 xl:static">
        <img
          onClick={(e) => {
            e.stopPropagation();
            alert('In development stage');
          }}
          className="xl:block hidden cursor-pointer"
          src="./images/bookmark.svg"
          alt="Bookmark"
        />
        <p className="text-[#878D9D]">{createdDaysAgo}</p>
      </div>
    </figure>
  );
};

export default JobBlock;
