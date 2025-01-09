import Image from 'next/image';
import Link from 'next/link';
import youTubeIcon from '@assets/images/channel_icon.png';
import { IoMdArrowDropdown } from 'react-icons/io';

export default function Video() {
  return (
    <div className='mb-10 flex w-full flex-col items-center justify-center border-gray-300'>
      <div className='xs:m-h-[280px] flex-flex-col aspect-video items-center justify-center xs:max-h-[422px] xs:w-[500px] md:h-[422px] md:w-[750px]'>
        <iframe
          src='https://www.youtube.com/embed/ipYckn3E_lY?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=ipYckn3E_lY'
          title='Wairi Introduction'
          allow='autoplay; gyroscope; mute;'
          allowFullScreen
          className='h-full w-full'
        ></iframe>
      </div>
      <div>
        <div className='mt-2 flex items-center justify-center'>
          <IoMdArrowDropdown />
        </div>
        <div className='hover:bg-gray-100 xs:w-[500px] md:w-[768px]'>
          <Link
            href='https://www.youtube.com/watch?v=ipYckn3E_lY'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center'
          >
            <span className='flex items-center justify-center gap-x-3 font-pre text-sm text-gray-600'>
              <Image
                src={youTubeIcon}
                width={24}
                height={24}
                alt='youtubeIcon'
              />
              소개 영상 다시 보기
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
