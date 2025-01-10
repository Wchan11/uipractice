import Image from 'next/image';
import { SlideImage, slideImages } from './slideData';

function renderImages(images: SlideImage[]) {
  return images.map((item) => (
    <div key={item.img} className="flex-shrink-0">
      <Image
        src={item.img}
        width={item.width}
        height={0}
        alt={item.alt}
        className="object-contain"
      />
    </div>
  ));
}

const sliderIndexes = slideImages.map(renderImages);

export default function ReferenceSliderX({
  currentIndex,
}: {
  currentIndex: number;
  width?: number;
}) {
  return (
    <div className='block xs:hidden w-screen h-[210px] overflow-hidden'>
      {/* 스크롤 컨테이너 */}
      <div className='animate-scroll-left flex items-center w-full h-full hover:pause'>
        {/* 이미지 리스트 */}
        {sliderIndexes[currentIndex]}
        {currentIndex == 3 ? null : sliderIndexes[currentIndex]}
      </div>
    </div>
  );
}
