import { FC, memo } from 'react';

type PageSwitcherProps = {
  page: number;
  id: number;
  moveToPage: (page: number) => () => void;
};

const PageSwitcher: FC<PageSwitcherProps> = ({ page, id, moveToPage }) => {
  return (
    <p
      className={`py-2 px-4 text-[20px] font-bold align-middle border-b-2 cursor-pointer ${
        page === id ? ' border-blue-500 text-blue-500' : 'border-white'
      }`}
      key={id}
      onClick={moveToPage(id)}
    >
      {id}
    </p>
  );
};

export default memo(PageSwitcher);
