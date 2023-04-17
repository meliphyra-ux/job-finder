import { FC } from 'react';

type ArrowButtonProps = {
  variant: '<' | '>';
  onClickHandler: () => void;
};

const ArrowButton: FC<ArrowButtonProps> = ({ variant, onClickHandler }) => {
  const styles =
    variant === '<'
      ? 'border-r-2 pl-2 pr-4 mr-2 cursor-pointer'
      : 'border-l-2 pl-4 pr-2 ml-2 cursor-pointer';

  return (
    <p className={styles} onClick={onClickHandler}>
      {variant}
    </p>
  );
};

export default ArrowButton;
