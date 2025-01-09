'use client';

import { useState } from 'react';
import ReferenceSlider from './ReferenceSlider';
import Image from 'next/image';
import ReButton from './ReButton';
import { useScroll } from '@/hooks/useScroll';

// const bottomImage = referenceImages.map((image) => {
//   <Image />;
// });

export default function ReferenceSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const {refs} = useScroll();

  const clickHandler = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className='scroll-mt-[58px] w-full bg-primaryColor font-pre text-white' ref={refs['case']}>
      <div className='xs:mx-auto xs:max-w-[768px] w-full px-4 flex flex-col xs:flex-row justify-between'>
        <div className='relative xs:left-14 flex flex-col'>
          {/* Title Section */}
          <div className='relative top-12 mb-6'>
            <h3 className='mb-2 text-[clamp(12px,2vw,14px)] uppercase tracking-wide'>
              reference
            </h3>
            <h2 className='text-[clamp(20px,4vw,30px)] font-bold leading-snug tracking-tighter break-keep'>
              와이리 인플루언서 마케팅 <br />
              사례들을 확인해보세요
            </h2>
          </div>
          <div className='mt-8 flex h-[12rem] flex-col items-start justify-end gap-y-3'>
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
          <div className='relative right-4 w-[clamp(280px,40vw,390px)] h-[clamp(200px,35vw,270px)] flex items-end'>
            <Image
              src={`/assets/images/reference_menu_image_${currentIndex}.png`}
              width={400}
              height={0}
              alt={'bt-img'}
              className={`w-full h-auto object-contain ${currentIndex === 3 ? "hidden" : ""}`}
            />
          </div>
        </div>

        {/*이미지 슬라이더 섹션 */}

        <ReferenceSlider currentIndex={currentIndex} />
      </div>
    </div>
  );
}
