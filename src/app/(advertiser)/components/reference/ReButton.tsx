type ReButtonProps = {
  buttonIndex: number;
  currentIndex: number;
  clickHandler: (index: number) => void;
  mainContent: string;
  subContent?: string;
};

export default function ReButton({
  buttonIndex,
  currentIndex,
  clickHandler,
  mainContent,
  subContent,
}: ReButtonProps) {
  return (
    <button
      onClick={() => clickHandler(buttonIndex)}
      className={`group relative text-[clamp(15px,2vw,18px)] xs:text-[clamp(12px,2vw,14px)] font-light text-[#DCF4F5] duration-300 ease-in-out ${
        currentIndex === buttonIndex ? 'text-[clamp(22px,2.4vw,28px)] xs:text-[clamp(16px,3vw,20px)] text-[#FFFFFF] font-pre !font-bold' : ''
      } ${
        currentIndex === buttonIndex
          ? 'before:absolute before:left-[-55px] before:top-3 before:h-[1px] before:w-10 before:-translate-y-1/2 before:bg-[#FFFFFF] before:content-[""] after:absolute after:left-[-15px] after:top-3 after:h-[5px] after:w-[5px] after:-translate-y-1/2 after:rounded-full after:bg-[#FFFFFF] after:content-[""]'
          : ''
      }`}
    >
      {mainContent}

      <br />
      <b
        className={`${
          currentIndex === buttonIndex ? 'block' : 'hidden'
        } text-[clamp(14px,2vw,18px)] text-left xs:text-[clamp(12px,2vw,14px)] font-semibold`}
      >
        {subContent}
      </b>
    </button>
  );
}
