import { FC } from 'react';
import { Location } from '../utils/api/fetchData';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
interface LocationAndContactsProps {
  location: Location;
  name: string;
  address: string;
  phone: string;
  email: string;
}

const LocationAndContacts: FC<LocationAndContactsProps> = ({
  location,
  name,
  address,
  phone,
  email,
}) => {
  return (
    <aside className="w-1/4 min-w-[300px] mt-8 xl:ml-[82px]">
      <div className="relative overflow-hidden bg-[#2A3047] px-10 py-8 text-white rounded-t-lg">
        <div className="w-2/3 aspect-square bg-[#202336] absolute left-[-20%] bottom-1/2 translate-y-1/2 rounded-full z-10"></div>
        <h3 className="z-index-text">{name}</h3>
        <p className="z-index-text">{address}</p>
        <p className="z-index-text">
          {phone}, {email}
        </p>
      </div>
      <LazyLoadImage
        width={600}
        effect="blur"
        wrapperClassName="max-w-full rounded-b-lg"
        className="rounded-b-lg "
        src={`https://maps.googleapis.com/maps/api/staticmap?zoom=13&size=600x400&maptype=roadmap&markers=color:white%7Clabel:%7C${location?.lat},${location?.long}&key=${import.meta.env.VITE_GOOGLE_API_KEY}&map_id=e445b78922fe296e`}
        alt="Map"
      />
    </aside>
  );
};

export default LocationAndContacts;
