import Image from 'next/image';
import { SlideImage, slideImages } from './slideData';

function renderImages(images: SlideImage[]) {
  return images.map((item) => (
    <div key={item.img} className="w-full">
      <Image
        src={item.img}
        width={item.width}
        height={0}
        alt={item.alt}
        className="w-[clamp(180px,30vw,250px)] h-auto object-contain"
      />
    </div>
  ));
}

const sliderIndexes = slideImages.map(renderImages);

export default function ReferenceSlider({
  currentIndex,
}: {
  currentIndex: number;
  width?: number;
}) {
  return (
    <div className='relative w-[clamp(180px,30vw,250px)] overflow-hidden'>
      {/* 스크롤 컨테이너 */}
      <div className='animate-scroll-down absolute top-0 flex w-full flex-col hover:pause'>
        {/* 이미지 리스트 */}
        {sliderIndexes[currentIndex]}
        {currentIndex == 3 ? null : sliderIndexes[currentIndex]}
      </div>
    </div>
  );
}
