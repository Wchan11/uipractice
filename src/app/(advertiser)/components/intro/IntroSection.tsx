'use client';

import Image from 'next/image';
import Video from '../video/Video';
import coins from '@assets/images/coins.png';
import coin from '@assets/images/coin.png';
import arrow from '@assets/images/arrow.svg';
import { useScroll } from '@/hooks/useScroll';

export default function IntroSection() {
  const { refs } = useScroll();

  return (
    <section
      ref={refs['intro']}
      className='mt-[58px] w-full scroll-mt-[58px] bg-white'
    >
      <Video />
      <div className='mx-auto flex w-full max-w-[768px] flex-col items-center px-4 py-10'>
        <div className='mb-10 flex flex-col items-center text-center'>
          <h1 className='sr-only'>와이리 서비스 소개</h1>
          <p className=' font-pre text-[clamp(18px,6.11vw,24px)] font-normal leading-[-1.5] tracking-tight text-subText'>
            언제까지 인플루언서 마케팅에 많은 비용을 쓰실건가요?
          </p>
          <div className='flex flex-col items-center gap-x-1'>
            <p className='font-pre text-[clamp(18px,6.11vw,24px)] font-bold leading-[-1.5] tracking-tight'>
              <span className='text-primaryColor'>무료로 검증된 인플루언서</span>
              <span className='text-black'>를 통해</span>
            </p>
            <p className='font-pre text-[clamp(18px,6.11vw,24px)] font-bold leading-[-1.5] tracking-tight text-black'>
              마케팅을 진행해보세요
            </p>
          </div>
        </div>

        <div className='flex w-full max-w-[500px] mx-auto items-center justify-between gap-4 px-4'>
          <div className='flex flex-col items-center gap-3 flex-1'>
            <div className='relative aspect-square w-[clamp(95px,22.22vw,120px)]'>
              <Image
                src={coins}
                alt='coins'
                fill
                className='object-contain'
              />
            </div>
            <div className='flex flex-col items-center text-center'>
              <h3 className='font-montserrat text-[clamp(16px,5.56vw,20px)] font-semibold tracking-tight text-gray-600'>
                400,000원~50,000원
              </h3>
              <p className='whitespace-pre-line text-[clamp(12px,3.89vw,14px)] text-gray-500 xs:whitespace-normal'>
                {'타사 인플루언서\n10명 진행 기준'}
              </p>
            </div>
          </div>

          <div className='relative w-[clamp(32px,12.22vw,40px)] aspect-[1.6/1] mx-4'>
            <Image src={arrow} alt='arrow' fill className='object-contain' />
          </div>

          <div className='flex flex-col items-center gap-3 flex-1'>
            <div className='relative aspect-square w-[clamp(70px,14.72vw,80px)]'>
              <Image
                src={coin}
                alt='coin'
                fill
                className='object-contain'
              />
            </div>
            <div className='flex flex-col items-center text-center'>
              <h2 className='font-montserrat text-[clamp(20px,6.67vw,25px)] font-semibold tracking-tight text-primaryColor'>
                0원
              </h2>
              <p className='whitespace-pre-line text-[clamp(12px,3.89vw,14px)] text-gray-500 xs:whitespace-normal'>
                {'와이리에서는\n인원수 관계없이 무료!'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
