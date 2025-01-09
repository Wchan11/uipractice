'use client';

import Image, { StaticImageData } from 'next/image';
import grandocean from '../../../../../public/assets/images/hotelreview_grandocean.svg';
import lotte from '../../../../../public/assets/images/hotelreview_lotte.svg';
import ibis from '../../../../../public/assets/images/hotelreview_ibis.svg';

interface Review {
  image: StaticImageData;
  title: string;
  subTitle: string;
  description: string;
}

export default function HotelReview() {
  const reviews: Review[] = [
    {
      image: lotte,
      title: '롯데 호텔 월드',
      subTitle: '신규 캠페인 홍보 진행',
      description:
        '"이번에 이용해보면서 정말 편리했어서, 도움 필요할 때마다 캠페인 등록하겠습니다! ㅎㅎ 매니저님 덕분에 이렇게 편하게 모집하네요"',
    },
    {
      image: ibis,
      title: '이비스 스타일 앰배서너',
      subTitle: '호텔 홍보 진행',
      description:
        '"좋텔 홍보에 정말 많은 도움이 됩니다. 신경써주셔서 너무 감사합니다."',
    },
    {
      image: grandocean,
      title: '그랜디오션',
      subTitle: '호텔 홍보 진행',
      description:
        '"무료로 이렇게 좋은 홍보를 할 수 있다는 너무 놀랍습니다. 다른 호텔도 홍보 많이 이뤄져 하겠습니다. 감사합니다!"',
    },
  ];

  return (
    <section className='w-full scroll-mt-[58px] bg-white'>
      <div className='mx-auto flex w-full max-w-[768px] flex-col px-4'>
        {/* Header */}
        <div className='mb-8'>
          <p className='text-sm uppercase tracking-wide text-teal-500'>
            REVIEW
          </p>
          <h2 className='text-2xl font-bold leading-snug tracking-tighter text-gray-700 break-keep'>
            400개의 업체와 마케팅을
            <br />
            함께하고 있습니다
          </h2>
        </div>

        {/* Cards Grid */}
        <div className='mb-12 grid grid-cols-1 gap-4 md:grid-cols-[1.2fr_0.8fr]'>
          {/* Left large card */}
          <div className='relative h-[320px] cursor-pointer overflow-hidden rounded-lg'>
            <Image
              src={reviews[0].image}
              alt={reviews[0].title}
              className='h-full w-full object-cover'
              priority
              fill
            />
            <div className='absolute inset-0 bg-gradient-to-b from-black/10 to-black/60' />
            <div className='absolute bottom-0 left-0 p-4 text-white'>
              <h3 className='mb-2 text-xl font-bold'>
                {reviews[0].title}
              </h3>
              <p className='mb-2 text-sm'>
                {reviews[0].subTitle}
              </p>
              <p className='text-sm opacity-70'>
                {reviews[0].description}
              </p>
            </div>
          </div>

          {/* Right column with two smaller cards */}
          <div className='grid grid-cols-1 gap-4'>
            {reviews.slice(1).map((review, index) => (
              <div
                key={index}
                className='relative h-[200px] cursor-pointer overflow-hidden rounded-lg'
              >
                <Image
                  src={review.image}
                  alt={review.title}
                  className='h-full w-full object-cover'
                  fill
                />
                <div className='absolute inset-0 bg-gradient-to-b from-black/10 to-black/60' />
                <div className='absolute bottom-0 left-0 p-4 text-white'>
                  <h3 className='mb-2 text-lg font-bold'>
                    {review.title}
                  </h3>
                  <p className='mb-2 text-sm'>
                    {review.subTitle}
                  </p>
                  <p className='text-sm opacity-70'>
                    {review.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* YouTube Video Section */}
        <div className='w-full mb-12'>
          <div className='relative aspect-video w-full overflow-hidden rounded-lg'>
            <iframe
              src='https://www.youtube.com/embed/mL5BoE_2Q5A'
              title='YouTube hotel review'
              className='absolute left-0 top-0 h-full w-full'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
