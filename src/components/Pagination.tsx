import { useContext } from 'react';
import { JobsContext } from '../contexts/JobsContext';

import PageSwitcher from './PageSwitcher';
import ArrowButton from './ArrowButton';

const Pagination = () => {
  const { visiblePage, setVisiblePage, amountOfPages } =
    useContext(JobsContext);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };

  const previousPage = () => {
    if (visiblePage !== 1) {
      setVisiblePage(visiblePage - 1);
      scrollToTop();
    }
  };

  const nextPage = () => {
    if (visiblePage !== amountOfPages) {
      setVisiblePage(visiblePage + 1);
      scrollToTop();
    }
  };

  const moveToPage = (page: number) => () => {
    setVisiblePage(Number(page));
    scrollToTop();
  };

  const pageButtons = Array(amountOfPages)
  .fill(1)
  .map((_, id) => (
    <PageSwitcher
      key={id}
      id={id + 1}
      page={visiblePage}
      moveToPage={moveToPage}
    />
  ))

  return (
    <div
      className="flex flex-row justify-center items-center bg-white px-2 rounded-lg text-[#7D859C] shadow-box"
    >
      <ArrowButton variant="<" onClickHandler={previousPage} />
      {pageButtons}
      <ArrowButton variant=">" onClickHandler={nextPage} />
    </div>
  );
};

export default Pagination;
