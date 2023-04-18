import Star from '../assets/star.png';
import Share from '../assets/share.svg';

import Button from './Button';
import { onApply } from '../pages/JobInfo';

const JobInfoHeader = () => {
  return (
    <>
      <header className="border-b-[1px] flex justify-between items-center">
        <h2 className="font-bold text-[28px]">Job details</h2>
        <div className="flex justify-between">
          <button className="mr-8 xl:flex hidden items-center">
            <img className="inline-block mr-3" src={Star} alt="star" />
            Save to my list
          </button>
          <button className="xl:flex hidden items-center">
            <img className="inline-block mr-3" src={Share} alt="share" />
            Share
          </button>
        </div>
      </header>

      <Button variant="normal" visible="media" fn={onApply}>
        Apply now
      </Button>
      <div className="xl:hidden mt-8">
        <button className="mr-8 inline-flex items-center">
          <img className="inline-block mr-3" src={Star} alt="star" />
          Save to my list
        </button>
        <button className="inline-flex items-center">
          <img className="inline-block mr-3" src={Share} alt="share" />
          Share
        </button>
      </div>
    </>
  );
};

export default JobInfoHeader;
