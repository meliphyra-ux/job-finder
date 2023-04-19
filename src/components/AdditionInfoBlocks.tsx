import { FC, useMemo } from 'react';

type THEMES = 'employement' | 'benefits';

type AdditionInfoBlocksProps = {
  title: string;
  array: string[];
  theme: THEMES
};

const THEMES_COLORS = {
  employement: {
    backgroundColor: 'rgba(161, 177, 219, 0.317343)',
    color: 'rgba(85, 105, 158, 1)',
    borderColor: 'rgba(85, 105, 158, 0.3)',
  },
  benefits: {
    backgroundColor: 'rgba(255, 207, 0, 0.15)',
    color: 'rgba(152, 139, 73, 1)',
    borderColor: 'rgba(255, 207, 0, 1)',
  },
};

const AdditionInfoBlocks: FC<AdditionInfoBlocksProps> = ({
  title,
  array,
  theme
}) => {
  const { backgroundColor, color, borderColor} = useMemo(() => {
    return THEMES_COLORS[theme]
  }, [theme])
  if (!array) {
    return <></>;
  }
  return (
    <>
      <h3 className="mt-[15px]">{title}</h3>
      <ul className="mt-[10px] flex max-w-full xl:flex-wrap overflow-scroll xl:overflow-visible">
        {array.map((item) => (
          <li
            key={item}
            className="border-[1px] py-4 min-w-[222px] text-center rounded-lg mr-2 flex-none"
            style={{
              backgroundColor,
              color,
              borderColor,
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default AdditionInfoBlocks;
