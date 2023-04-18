import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

type PicturesGroupProps = {
  pictures: string[]
}

const PicturesGroup: FC<PicturesGroupProps> = ({ pictures }) => {
  return (
    <div
      className="
          max-w-full mt-[12px] mb-[30px] flex flex-row 
          xl:overflow-visible overflow-scroll
          "
    >
      {pictures.map((picture, index) => (
        <LazyLoadImage
          key={picture + index}
          width={210}
          effect="blur"
          wrapperClassName="mr-2 flex-none"
          className="aspect-video rounded-lg object-cover object-center"
          src={picture}
          alt="Attached images"
        />
      ))}
    </div>
  );
};

export default PicturesGroup;
