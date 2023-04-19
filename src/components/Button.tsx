import { ReactNode, FC, memo, useMemo } from 'react';

type ButtonProps = {
  variant: 'normal' | 'inverted' | 'alter';
  children: ReactNode;
  fn?: () => void;
  visibility?: 'always' | 'media';
};

const BUTTON_STYLES = {
  normal: 'bg-[#3A4562] text-white',
  inverted: 'bg-[#38456424]',
  alter: 'first:ml-0 ml-8 inline-flex items-center',
};

const Button: FC<ButtonProps> = ({
  variant,
  children,
  fn = () => {},
  visibility = 'always',
}) => {
  const styles = useMemo(() => {
    let visibilityControl = `${visibility === 'media' ? 'xl:flex hidden ' : ' ' }`
    switch(variant){
      case 'normal':
      case 'inverted':
        return visibilityControl + `job-info-button rounded-lg ${BUTTON_STYLES[variant]}`
      case 'alter':
        return visibilityControl + `${BUTTON_STYLES['alter']}}`
    }
  }, [])
  
  return (
    <button
      className={styles}
      onClick={fn}
    >
      {children}
    </button>
  );
};

export default memo(Button);
