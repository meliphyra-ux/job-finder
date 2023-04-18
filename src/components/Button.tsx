import { ReactNode, FC } from 'react';

type ButtonProps = {
  variant: 'normal' | 'inverted';
  children: ReactNode;
  fn?: () => void;
  visible?: 'always' | 'media';
};

const BUTTON_STYLES = {
  normal: 'bg-[#3A4562] text-white',
  inverted: 'bg-[#38456424]',
};

const Button: FC<ButtonProps> = ({
  variant,
  children,
  fn = () => {},
  visible = 'always',
}) => {
  return (
    <button
      className={`job-info-button rounded-lg ${
        visible === 'media' ? 'xl:block hidden' : ''
      } ${BUTTON_STYLES[variant]}`}
      onClick={fn}
    >
      {children}
    </button>
  );
};

export default Button;
