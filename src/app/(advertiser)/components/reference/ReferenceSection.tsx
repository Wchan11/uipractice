'use client';

import { useState } from 'react';
import ReferenceSlider from './ReferenceSlider';
import Image from 'next/image';
import ReButton from './ReButton';
import { useScroll } from '@/hooks/useScroll';
import ReferenceSliderX from './ReferenceSliderX'

// const bottomImage = referenceImages.map((image) => {
//   <Image />;
// });

export default function ReferenceSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const { refs } = useScroll();

  const clickHandler = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className='w-full scroll-mt-[58px] bg-primaryColor font-pre text-white'
      ref={refs['case']}
    >
      <div className='flex w-full flex-col justify-between xs:px-4 xs:mx-auto xs:max-w-[768px] xs:flex-row'>
        <div className='relative flex flex-col xs:left-[4.5vw]'>
          {/* Title Section */}
          <div className='relative top-12 xs:mb-6 pl-[10vw] xs:pl-0'>
            <h3 className='mb-2 text-[4.2vw] xs:text-[clamp(12px,2vw,14px)] uppercase tracking-wide'>
              reference
            </h3>
            <h2 className='break-keep text-[clamp(24px,4vw,28px)] xs:text-[clamp(20px,4vw,30px)] font-bold leading-snug tracking-tighter'>
              와이리 인플루언서 마케팅 <br />
              사례들을 확인해보세요
            </h2>
          </div>
          <div className='mt-8 mb-6 xs:mb-0 flex h-[12rem] flex-col items-start justify-end gap-y-3 pl-[10vw] xs:pl-0'>
            <ReButton
              buttonIndex={Number(0)}
              currentIndex={currentIndex}
              clickHandler={clickHandler}
              mainContent='와이리 X 평창 휘닉스 파크'
              subContent='총 61건의 콘텐츠 제작'
            />
            <ReButton
              buttonIndex={1}
              currentIndex={currentIndex}
              clickHandler={clickHandler}
              mainContent='와이리 X 씨티칼리지'
              subContent='총 24건의 콘텐츠 제작'
            />
            <ReButton
              buttonIndex={2}
              currentIndex={currentIndex}
              clickHandler={clickHandler}
              mainContent='와이리 X 이스트웨이브'
              subContent='총 1건의 콘텐츠 제작'
            />
            <ReButton
              buttonIndex={3}
              currentIndex={currentIndex}
              clickHandler={clickHandler}
              mainContent='더 많은 예시 보기'
            />
          </div>
          <ReferenceSliderX currentIndex={currentIndex} />
          <div className='flex items-center justify-center'>
            <div className='relative xs:right-4 flex xs:h-[clamp(200px,35vw,270px)] xs:w-[clamp(280px,40vw,390px)] items-end justify-center'>
              <Image
                src={`/assets/images/reference_menu_image_${currentIndex}.png`}
                width={400}
                height={0}
                alt={'bt-img'}
                className={`h-auto w-full object-contain ${currentIndex === 3 ? 'hidden' : ''}`}
              />
            </div>
          </div>
        </div>

        {/*이미지 슬라이더 섹션 */}
       
          <ReferenceSlider currentIndex={currentIndex} />
        
      </div>
    </div>
  );
}
