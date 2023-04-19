import Button from './Button';
import { onDevelopmentStage } from '../utils/functions/globalFunctions';

const JobInfoHeader = () => {
  return (
    <>
      <header className='flex xl:flex-row flex-col justify-between items-start xl:items-center py-4 border-b-[1px]'>
        <h1 className='text-3xl font-bold'>Job Details</h1>
        <nav className='mt-4 xl:mt-0'>
          <Button variant="alter" fn={onDevelopmentStage}>
            <img
              className="inline-block mr-3"
              src="./images/star.png"
              alt="star"
            />
            Save to my list
          </Button>
          <Button variant="alter" fn={onDevelopmentStage}>
            <img
              className="inline-block mr-3"
              src="./images/share.svg"
              alt="share"
            />
            Share
          </Button>
        </nav>
      </header>
      <Button variant='normal' visibility='media'>Apply now</Button>
    </>
  );
};

export default JobInfoHeader;
