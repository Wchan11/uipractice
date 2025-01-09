interface PerformanceBoxProps {
    title: string;
    count: string;
    unit: string;
  }

const UnitItem = ({ title, count, unit }: PerformanceBoxProps) => {
  return (
    <div className="flex flex-col border-t border-gray-500 pt-[clamp(8px,3.33vw,12px)] text-left">
      <h4 className="mb-[clamp(4px,1.11vw,8px)] text-[clamp(14px,4.44vw,16px)] font-normal tracking-tight text-gray-500">
        {title}
      </h4>
      <p className="text-[clamp(18px,6.67vw,24px)] font-medium text-gray-500">
        {count}
        <span className="ml-1 text-[clamp(16px,5.56vw,20px)] font-normal">
          {unit}
        </span>
      </p>
    </div>
  );
};

export default function PerformanceSection() {
  return (
    <section className="w-full bg-cardYellow font-montserrat py-[clamp(32px,8.89vw,56px)]">
      <div className="relative mx-auto flex w-full max-w-[768px] flex-col xs:flex-row xs:gap-x-20 px-4">
        {/* Title Section */}
        <div className="mb-8 xs:mb-0">
          <h3 className="mb-2 text-[clamp(12px,4.17vw,14px)] uppercase tracking-wide text-teal-500">
            Performance
          </h3>
          <h2 className="text-[clamp(18px,6.67vw,24px)] font-bold leading-snug tracking-tighter text-gray-700 break-keep">
            와이리를 통해 캠페인을
            <br />
            진행 해보세요
          </h2>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-x-[clamp(20px,7.29vw,30px)] gap-y-[clamp(16px,6.67vw,24px)] pt-[clamp(16px,5vw,34px)] mx-2">
          <UnitItem title="보유 인플루언서 수" count="25,000+" unit="명" />
          <div></div>
          <UnitItem title="캠페인 신청수" count="16,024+" unit="건" />
          <UnitItem title="캠페인 선정수" count="2,281+" unit="건" />
        </div>
      </div>
    </section>
  );
}
