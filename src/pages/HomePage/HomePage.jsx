import React from 'react';
import StoriesCards from '../../components/StoriesCards';
import storiesItemsData from '../../stories.json';
import StoriesContainer from '../../components/StoriesContainer';
import { ReactComponent as ArrowIcon } from '../../assets/shared/desktop/arrow.svg';

const HomePage = () => {
  return (
    <>
      <section className='section-1 md:flex '>
        <img src="../../assets/home/mobile/create-and-share.jpg" alt="Man standing on pier" className='md:order-2 md:hidden' />
        <img src="../../assets/home/tablet/create-and-share.jpg" alt="Man standing on pier" className='md:order-2 hidden md:block lg:hidden' />
        <img src="../../assets/home/desktop/create-and-share.jpg" alt="Man standing on pier" className='md:order-2 hidden md:hidden lg:block lg:w-full' />
        <div className='section-paragraph py-20 px-12 bg-black text-pureWhite md:order-1 md:py-44 lg:px-24'>
          <h1 className='text-3xl tracking-wide uppercase text-left font-bold md:text-[2.5rem] md:tracking-[0.260625rem] md:leading-10'>Create and Share your Photo Stories.</h1>
          <p className='text-base font-normal opacity-60 leading-6 mt-4 lg:mt-6'>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</p>
          <div className='link-container flex items-center space-x-3 mt-4 cursor-pointer lg:mt-8 '>
            <p className=' uppercase tracking-wider text-xs'>Get an Invite</p>
            <ArrowIcon className=' stroke-pureWhite'/>
          </div>
        </div> 
      </section>
      <section className='section-2 md:flex '>
        <img src="../../assets/home/mobile/beautiful-stories.jpg" alt="Laptop On Desk" className='md:hidden' />
        <img src="../../assets/home/tablet/beautiful-stories.jpg" alt="Laptop On Desk" className=' hidden md:block lg:hidden' />
        <img src="../../assets/home/desktop/beautiful-stories.jpg" alt="Laptop On Desk" className=' hidden md:hidden lg:block lg:w-full' />
        <div className='section-paragraph py-20 px-12 md:py-44 lg:px-24'>
          <h1 className=' text-3xl uppercase tracking-wide  text-left font-bold md:text-[2.5rem] md:tracking-[0.260625rem] md:leading-10'>Beautiful Stories Every Time</h1>
          <p className='text-base opacity-60 leading-6 mt-4 lg:mt-6'>We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.</p>
          <div className='link-container flex items-center space-x-3 mt-4 cursor-pointer lg:mt-8 '>
            <p className=' uppercase tracking-wider text-xs'>View the Stories</p>
            <ArrowIcon className=' stroke-black'/>
          </div>
        </div>
      </section>
      <section className='section-3 md:flex '>
        <img src="../../assets/home/mobile/designed-for-everyone.jpg" alt="Man standing on pier" className='md:order-2 md:hidden' />
        <img src="../../assets/home/tablet/designed-for-everyone.jpg" alt="Man standing on pier" className='md:order-2 hidden md:block lg:hidden' />
        <img src="../../assets/home/desktop/designed-for-everyone.jpg" alt="Man standing on pier" className='md:order-2 hidden md:hidden lg:block lg:w-full' />
        <div className='section-paragraph py-20 px-12 md:order-1 md:py-44 lg:px-24'>
          <h1  className='text-3xl tracking-wide uppercase text-left font-bold md:text-[2.5rem] md:tracking-[0.260625rem] md:leading-10'>Designed for Everyone</h1>
          <p className='text-base opacity-60 leading-6 mt-4 lg:mt-6'>Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. </p>
          <div className='link-container flex items-center space-x-3 mt-4 cursor-pointer lg:mt-8 '>
            <p className=' uppercase tracking-wider text-xs'>View the Stories</p>
            <ArrowIcon className=' stroke-black'/>
          </div>
        </div>
      </section>
      <StoriesContainer>
        {storiesItemsData
          .filter((media) => media.isHomepage && !media.isMainCard)
          .map((media) => (
            <StoriesCards
              title={media.title}
              mobile={media.images.mobile}
              desktop={media.images.desktop}
              tablet={media.images.tablet}
              date={media.date}
              photographer={media.photographer}
              key={media.id}
            />
          ))}
      </StoriesContainer>
    </>
  );
};

export default HomePage;
