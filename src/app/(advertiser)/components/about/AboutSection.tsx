'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface AboutItem {
  id: string;
  title: string;
  description: string;
  imgUrl: string;
}

const aboutItems: AboutItem[] = [
  {
    id: '01',
    title: '신뢰성 있는 인플루언서',
    description: '와이리는 신뢰성 있는 인플루언서만을 모집하여 귀사의\n브랜드 이미지를 높이는 데 최선을 다하고 있습니다.',
    imgUrl: '/assets/images/about_image_01.svg'
  },
  {
    id: '02',
    title: '정확한 타겟팅',
    description:
      '와이리 인플루언서는 특정 관심사나 취미를 가진 팔로워를\n보유하고있습니다. 귀사의 서비스와 가장 잘 맞는 인플루언서를\n 찾아 타겟팅 마케팅을 수행할 수 있으므로 광고 효율이 높습니다.',
    imgUrl: `/assets/images/about_image_02.svg`,
  },
  {
    id: '03',
    title: '높은 ROI (투자 대비 수익)',
    description:
      '인플루언서 마케팅은 낮은 비용으로 높은 ROI를 제공합니다.\n 와이리 상위 인플루언서의 경우 평균적으로 네이버 유료 광고\n 76만원, 페이스북(인스타그램) 메타 유료 광고 18만원을 집행\n하는것과 유사한 효과를 내고 있습니다.',
    imgUrl: `/assets/images/about_image_03.svg`,
  },
  {
    id: '04',
    title: '콘텐츠 확보',
    description:
      '인플루언서는 사진, 동영상, 블로그 포스트 등 다양한 형태의\n 콘텐츠를 제작합니다. 이러한 콘텐츠는 귀사의 마케팅 자료로\n도 활용될 수 있습니다. 와이리를 통해 고퀄리티의 다양한 콘텐\n츠를 확보할 수 있습니다.',
    imgUrl: `/assets/images/about_image_04.svg`,
  },
  {
    id: '05',
    title: '소셜 미디어 참여도 증가',
    description:
      '인플루언서의 콘텐츠는 높은 참여도를 유도합니다. 댓글, 좋아\n요, 공유, 네이버 메인페이지 SEO 노출, 참여가 증가하여 소셜\n 미디어 활동이 활발해지고, 이는 귀사의 온라인 존재감을 강화\n합니다.',
    imgUrl: `/assets/images/about_image_05.svg`,
  },
  {
    id: '06',
    title: '새로운 고객층 유입',
    description:
      '인플루언서를 통해 새로운 고객층이 유입될 수 있습니다. 특히\n 젊은 세대나 특정 관심사를 가진 고객층을 효과적으로 유치할\n 수 있습니다. 와이리를 통해 다양한 인플루언서와 협력하면 새\n로운 시장을 개척할 수 있습니다.',
    imgUrl: `/assets/images/about_image_06.svg`,
  },
 
];



const AboutCard = ({ item }: { item: AboutItem }) => {
  return (
    <div className="min-w-full flex flex-col items-center gap-6 xs:flex-row xs:gap-10 snap-center px-4">
      <div className="relative aspect-square w-[clamp(180px,50vw,240px)] xs:w-[clamp(120px,30vw,156px)]">
        <Image
          src={item.imgUrl}
          alt={item.title}
          fill
          className="object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 text-left mx-2">
        <div className="relative">
          <span className="font-montserrat text-[clamp(28px,10vw,36px)] text-teal-500">
            {item.id}
          </span>
    
        </div>
        <h3 className="text-[clamp(18px,5vw,22px)] font-bold text-gray-700 tracking-tighter">
          {item.title}
        </h3>
        <p className="text-[clamp(14px,4vw,16px)] text-gray-600 tracking-[-0.075em] font-pre whitespace-pre-line">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default function AboutSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'prev' | 'next') => {
    if (!scrollRef.current) return;

    const newIndex = direction === 'next' 
      ? Math.min(currentIndex + 1, aboutItems.length - 1)
      : Math.max(currentIndex - 1, 0);

    scrollRef.current.scrollTo({
      left: scrollRef.current.clientWidth * newIndex,
      behavior: 'smooth'
    });
    setCurrentIndex(newIndex);
  };

  return (
    <section className="w-full bg-[#F9F9F9] py-[clamp(32px,8.89vw,56px)]">
      <div className="mx-auto w-full max-w-[768px]">
        {/* Title Section */}
        <div className="mb-8 px-4 relative">
          <h3 className="mb-2 text-[clamp(12px,4.17vw,14px)] uppercase tracking-wide text-teal-500">
            About
          </h3>
          <h2 className="text-[clamp(18px,6.67vw,24px)] font-bold leading-snug tracking-tighter text-gray-700 break-keep">
            와이리 인플루언서 마케팅은
            <br />
            어떤 장점이 있나요?
          </h2>
          
          {/* Navigation Buttons - 위치 수정 */}
          <div className="absolute right-4 top-[35.5vh] xs:top-[15vh] flex gap-1 z-10">
            <button
              onClick={() => handleScroll('prev')}
              disabled={currentIndex === 0}
              className="rounded-full bg-primaryColor p-2 text-white hover:bg-teal-300 disabled:cursor-not-allowed disabled:bg-gray-300"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => handleScroll('next')}
              disabled={currentIndex === aboutItems.length - 1}
              className="rounded-full bg-primaryColor p-2 text-white hover:bg-teal-300 disabled:cursor-not-allowed disabled:bg-gray-300"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative w-auto overflow-hidden xs:ml-8">
          <div 
            ref={scrollRef}
            className="flex w-full overflow-x-auto snap-x snap-mandatory scroll-smooth
              [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:none]"
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {aboutItems.map((item) => (
              <AboutCard 
                key={item.id} 
                item={item}
                
              />
            ))}
          </div>
        </div>

        {/* Progress Dots */}
        {/* <div className="mt-6 flex items-center gap-2 px-4 xs:hidden">
          {aboutItems.map((_, idx) => (
            <div key={idx} className="flex-1 flex items-center">
              <div 
                className={`h-2 w-2 rounded-full ${
                  idx === currentIndex ? 'bg-teal-500' : 'bg-gray-200'
                }`} 
              />
              {idx < aboutItems.length - 1 && (
                <div className="h-[1px] flex-1 bg-gray-200" />
              )}
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
