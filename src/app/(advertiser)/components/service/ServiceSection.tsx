'use client';

import Image from 'next/image';
import { IoIosArrowDown } from 'react-icons/io';
import { useScroll } from '@/hooks/useScroll';
import { useState } from 'react';
import Link from 'next/link';

interface ServiceFeature {
  id: number;
  label: string;
  availability: [boolean, boolean, boolean];  // [무료, 기본, 플러스]
}

const pricingTiers = [
  { name: '무료', price: '직접진행' },
  { name: '기본 멤버십', price: '월 39,000원' },
  { name: '플러스 멤버십', price: '월 49,000원' },
] as const;

const serviceFeatures: ServiceFeature[] = [
  { id: 1, label: '신규 캠페인 생성', availability: [false, true, true] },
  { id: 2, label: '신규 상품(객실) 등록', availability: [false, true, true] },
  { id: 3, label: '캠페인 및 상품 관리', availability: [false, true, true] },
  { id: 4, label: '재고 등록', availability: [false, true, true] },
  { id: 5, label: '재고 관리', availability: [false, true, true] },
  { id: 6, label: '포스팅 검수', availability: [false, true, true] },
  { id: 7, label: '인플루언서 선정', availability: [false, false, true] },
  { id: 8, label: '배포된 콘텐츠 내\n사용된 사진 원본 전달', availability: [false, false, true] },
  { id: 9, label: '캠페인 앱 내 상단 노출을 통한\n인플루언서 모집 효과 증가', availability: [false, false, true] },
];

const serviceItems = [
  {
    icon: '/assets/images/our_service_calendar.png',
    title: '유연한 일정',
    description: '원하는 날짜와\n재고를 자유롭게 설정',
  },
  {
    icon: '/assets/images/our_service_medal.png',
    title: '콘텐츠 활용',
    description: '콘텐츠 2차 활용 가능',
  },
  {
    icon: '/assets/images/our_service_search.png',
    title: '실시간 관리',
    description: '콘텐츠 실시간 보고\n및 초안 검수',
  },
  {
    icon: '/assets/images/our_service_doc.png',
    title: '무제한 캠페인',
    description: '횟수 제한 없는\n캠페인 세팅',
  },
  {
    icon: '/assets/images/our_service_computer.png',
    title: '전용 페이지',
    description: '편리한 파트너\n전용 관리 페이지',
  },
  {
    icon: '/assets/images/our_service_humans.png',
    title: '인플루언서',
    description: '인플루언서 무제한\n모집 및 선정',
  },
];

export default function ServiceSection() {
  const { scrollTo } = useScroll();
  const [selectedPlan, setSelectedPlan] = useState(0);



  return (
    <>
      <section className='py-[clamp(32px,8.89vw,56px)] bg-white w-full '>
        <div className='w-full max-w-[768px] mx-auto'>
          <div className='flex-col gap-y-8 relative flex'>
            <div className='mb-8 px-4'>
              <h3 className='mb-2 text-[clamp(12px,4.17vw,14px)] uppercase tracking-wide text-teal-500'>
                Our Services
              </h3>
              <h2 className='break-keep text-[clamp(18px,6.67vw,24px)] font-bold leading-snug tracking-tighter text-gray-700'>
                와이리를 이용하신다면!
              </h2>
            </div>

            {/* 모바일/데스크톱 뷰 컨테이너 */}
            <div className='relative'>
              {/* 모바일 그리드 뷰 */}
              <div className='xs:hidden flex-col block flex'>
                <div className='p-4 grid-cols-2 gap-8 grid'>
                  {serviceItems.map((item, index) => (
                    <div
                      key={index}
                      className='items-center gap-3 flex-col flex'
                    >
                      <div className='relative h-[35vw] w-[35vw]'>
                        <Image
                          src={item.icon}
                          alt={item.title}
                          fill
                          className='object-contain'
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className='relative h-[30vh]'>
                  <Image
                    src='/assets/images/our_service_ellipse.svg'
                    alt='모바일_원형'
                    fill
                    className='object-contain'
                  />
                </div>
              </div>

              {/* 데스크톱 원형 배치 */}
              <div className='relative hidden h-[400px] xs:block'>
                <div className='absolute left-1/2 top-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2'>
                  <div className='relative mt-[10vh] h-full'>
                    <Image
                      src='/assets/images/our_service_ellipse.svg'
                      alt='데스크톱_원형'
                      fill
                      className='object-contain'
                    />
                  </div>
                </div>
                {serviceItems.map((item, index) => (
                  <div
                    key={index}
                    className={`absolute flex flex-col items-center gap-2 ${getPositionClass(index)}`}
                  >
                    <div className='relative h-[7.1rem] w-[7.1rem]'>
                      <Image
                        src={item.icon}
                        alt={item.title}
                        fill
                        className='object-contain'
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className='text-center xs:mt-10'>
              <p className='font-pre text-xl'>
                시간이 부족한 분들을 위해 <br /> 인플루언서 마케팅 전체 대행
                서비스도 운영하고 있어요!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ... details 섹션 ... */}
      <details className='pb-8'>
        <summary className='flex list-none justify-center text-center font-pre text-sm text-gray-700'>
          <div className='inline-flex cursor-pointer items-center rounded-md py-1 hover:bg-gray-100'>
            <span>대행 서비스 보기</span>
            <IoIosArrowDown className='ml-1 flex justify-center font-bold' />
          </div>
        </summary>

        <div className="bg-[#424242] font-pre mt-8">
          <div className="mx-auto w-full max-w-[768px]">
            <div className="px-4 py-8 xs:p-12">
              {/* 데스크톱 뷰 */}
              <div className="hidden xs:block">
                {/* 타이틀 영역 */}
                <div className="mb-[0.78rem] text-center">
                  <h3 className="font-pre font-bold xs:text-[1.17rem] text-[2.5vw] xs:leading-[1.82rem] leading-[4.17vw] text-white tracking-tighter mb-3">
                    투자 가능한 시간에 따라 가격 플랜을 선택하고 <br /> 
                    마케팅 결과만 받아보세요
                  </h3>
                  <p className="font-pre font-normal xs:text-[1.04rem] text-[2.22vw] xs:leading-[1.56rem] leading-[3.33vw] text-gray-300">
                    대부분 내용은 시스템상에서 직접 무료로 진행이 가능하며,<br />
                    체크된 항목은 와이리에서 대행해드립니다
                  </p>
                </div>

                {/* 플랜 선택 영역 */}
                <div className="flex justify-end gap-[8vw] md:gap-[3.8rem] md:pr-[0.85rem] pr-[1.6vw]">
                  {pricingTiers.map((plan, idx) => (
                    <div key={idx} className="flex flex-col gap-[0.8rem] pt-[1.8rem] items-center">
                      <div className={`w-[13vw] md:w-[5.8rem] rounded-[0.6rem] py-[1.2vw] md:py-[0.45rem] text-center ${
                        idx === 0 ? 'border-[1.5px] border-[#B1E7E8]' : 'bg-[#B1E7E8]'
                      }`}>
                        <p className={`font-semibold text-[1.8vw] md:text-[0.85rem] leading-[2.7vw] md:leading-[1.3rem] ${
                          idx === 0 ? 'text-white' : 'text-gray-700'
                        }`}>
                          {plan.name}
                        </p>
                        <p className={`font-normal text-[1.55vw] md:text-[0.7rem] leading-[2.3vw] md:leading-[1.1rem] ${
                          idx === 0 ? 'text-[#B1E7E8]' : 'text-gray-700'
                        }`}>
                          {plan.price}
                        </p>
                      </div>
                      <button 
                        onClick={() => scrollTo('inquiry')}
                        className="rounded-[1.7rem] py-[0.4rem] px-[1rem] bg-black w-fit"
                      >
                        <p className="text-[1.55vw] whitespace-nowrap text-white font-semibold leading-[2.3vw] md:leading-[1.1rem] md:text-[0.7rem] font-pretendard">
                          이용하기
                        </p>
                      </button>
                    </div>
                  ))}
                </div>

                {/* 서비스 목록 */}
                <div className="pt-7 flex flex-col gap-[0.7rem]">
                  {serviceFeatures.map((feature, index) => (
                    <div key={index} className="flex flex-col md:gap-[0.7rem] gap-[1.3vw]">
                      <div className="flex md:gap-[0.7rem] gap-[1.4vw] md:px-[0.7rem] px-[1.4vw]">
                        <p className="whitespace-pre-line font-pre font-normal md:text-[0.72rem] text-[1.7vw] md:leading-[1.2rem] leading-[2.5vw] text-white md:w-[11.5rem] w-[24vw]">
                          {feature.label}
                        </p>
                        <div className="flex w-full justify-end md:gap-[3.7rem] gap-[7.5vw]">
                          {[0, 1, 2].map((planIdx) => (
                            <div key={planIdx} className="md:w-[5.8rem] w-[13vw] flex items-center justify-center">
                              <Image
                                src={`/assets/images/${feature.availability[planIdx] ? 'check' : 'x'}.png`}
                                alt={feature.availability[planIdx] ? '가능' : '불가능'}
                                width={20}
                                height={20}
                                className="md:w-[1.3rem] w-[2.7vw] md:h-[1.3rem] h-[2.7vw]"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                      {index !== serviceFeatures.length - 1 && <hr className="border-gray-500" />}
                    </div>
                  ))}
                  <p className="px-[1.4vw] font-pre font-normal md:text-[0.6rem] text-[1.3vw] md:leading-[0.9rem] leading-[1.9vw] text-gray-200">
                    * 포스팅 원본 전달의 경우, 캠페인 신청 전 동의하지 않은 인플루언서의 파일은 전달이 불가할 수 있음을
                    사전에 알려드립니다.
                  </p>
                </div>
              </div>

              {/* 모바일 뷰 */}
              <div className="flex flex-col gap-10 xs:hidden ">
                <div className="flex justify-between">
                  {pricingTiers.map((plan, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedPlan(idx)}
                      className={`w-[26.67vw] rounded-[2.22vw] border-[1.5px] py-[2.22vw] font-pre text-center ${
                        selectedPlan === idx 
                          ? 'border-[#B1E7E8]' 
                          : 'bg-[#B1E7E8] text-gray-700'
                      }`}
                    >
                      <p className={`font-semibold text-[3.89vw] leading-[5.83vw] ${
                        selectedPlan === idx ? 'text-white' : ''
                      }`}>
                        {plan.name}
                      </p>
                      <p className={`font-normal text-[3.33vw] leading-[4.44vw] ${
                        selectedPlan === idx ? 'text-[#B1E7E8]' : ''
                      }`}>
                        {plan.price}
                      </p>
                    </button>
                  ))}
                </div>

                <div className="flex flex-col gap-[0.618rem]">
                  {serviceFeatures.map((feature, index) => (
                    <div key={index} className="flex flex-col gap-[1.32vw]">
                      <div className="flex items-center justify-between pl-[5.56vw] pr-[6.67vw]">
                        <p className="w-[46.67vw] font-pre font-normal text-[3.89vw] leading-[6.67vw] text-white whitespace-pre-line">
                          {feature.label}
                        </p>
                        <Image
                          src={`/assets/images/${feature.availability[selectedPlan] ? 'check' : 'x'}.png`}
                          alt={feature.availability[selectedPlan] ? '가능' : '불가능'}
                          width={24}
                          height={24}
                          className="w-[8.61vw] h-[8.61vw]"
                        />
                      </div>
                      {index !== serviceFeatures.length - 1 && <hr className="border-gray-500" />}
                    </div>
                  ))}
                 
                </div>
                <p className="font-pre font-normal text-[3.12vw] text-gray-200 text-left">
                    * 포스팅 원본 전달의 경우, 캠페인 신청 전 동의하지 않은 인플루언서의 파일은 전달이 불가할 수 있음을
                    사전에 알려드립니다.
                  </p>

                <Link 
                  href="/" 
                  className="w-full rounded-[15.56vw] bg-black py-[2.78vw] px-[8.89vw] text-center"
                >
                  <p className="font-pre font-semibold text-[3.89vw] leading-[4.80vw] text-white">
                    이용하기
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </details>
    </>
  );
}

function getPositionClass(index: number) {
  const positions = [
    'left-[32%] top-[10%]',
    'right-[32%] top-[10%]',
    'left-[15%] bottom-[43%]',
    'right-[15%] bottom-[43%]',
    'left-[6%] bottom-[10%]',
    'right-[6%] bottom-[10%]',
  ];
  return positions[index];
}
