import Image from 'next/image';

export type SlideProps = {
  id: string;
  title: string;
  description: string;
  imgUrl: string;
};

export default function Slide({
  id,
  title,
  description,
  imgUrl,
}: SlideProps) {
  return (
    <div className='flex h-[200px] flex-col xs:flex-row justify-center xs:mx-8 xs:gap-x-16'>
      <div className='flex flex-col items-center xs:items-start'>
        <Image 
          src={imgUrl} 
          alt={id} 
          width={180} 
          height={180}
          className='w-[120px] xs:w-[180px] h-auto'
        />
      </div>
      <div className='text-center xs:text-left mt-4 xs:mt-0'>
        <div className='text-[clamp(24px,5vw,30px)] text-primaryColor mb-[14px]'>{id}</div>
        <div className='w-full xs:w-[310px]'>
          <p className='font-semibold text-[clamp(16px,3vw,18px)] tracking-[-0.075em] text-gray-700 mb-1 break-keep'>
            {title}
          </p>
          <p className='text-[clamp(14px,2.5vw,16px)] text-gray-700 font-pre break-keep'>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
