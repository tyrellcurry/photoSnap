import React from 'react';
import StoriesCards from '../../components/StoriesCards';
import storiesItemsData from '../../stories.json';
import StoriesContainer from '../../components/StoriesContainer';
import {ReactComponent as ArrowIcon} from '../../assets/shared/desktop/arrow.svg';
import FeatureItem from '../../components/FeatureItem';

const HomePage = () => {
  return (
    <>
      <section className="section-1 md:grid md:grid-cols-5">
        <div className="md:order-2 md:col-span-2 lg:col-span-3">
          <img
            src="../../assets/home/mobile/create-and-share.jpg"
            alt="Man standing on pier"
            className="md:hidden w-auto h-auto min-h-full min-w-full"
          />
          <img
            src="../../assets/home/tablet/create-and-share.jpg"
            alt="Man standing on pier"
            className="hidden md:block lg:hidden w-auto h-auto min-h-full min-w-full"
          />
          <img
            src="../../assets/home/desktop/create-and-share.jpg"
            alt="Man standing on pier"
            className="hidden lg:block w-auto h-auto min-h-full min-w-full object-cover object-center"
          />
        </div>
        <div className="section-paragraph py-20 px-12 bg-black text-pureWhite md:order-1 md:py-44 md:col-span-3 lg:px-16 xl:px-24 lg:col-span-2 md:flex md:flex-col md:justify-center">
          <h1 className="text-4xl tracking-wide uppercase text-left font-bold md:text-5xl lg:text-4xl xl:text-5xl md:tracking-[0.260625rem] leading-tight md:leading-tight lg:leading-tight xl:leading-tight">
            Create and Share your Photo Stories.
          </h1>
          <p className="text-base font-normal opacity-60 leading-6 mt-4 lg:mt-6 xl:text-lg">
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </p>
          <div className="link-container flex items-center space-x-3 mt-4 cursor-pointer lg:mt-8 ">
            <p className=" uppercase tracking-x-wide text-xs hover:underline lg:text-sm">
              Get an Invite
            </p>
            <ArrowIcon className=" stroke-pureWhite" />
          </div>
        </div>
      </section>
      <section className="section-1 md:grid md:grid-cols-5">
        <div className="md:order-2 md:col-span-2 lg:col-span-3">
          <img
            src="../../assets/home/mobile/beautiful-stories.jpg"
            alt="Man standing on pier"
            className="md:hidden w-auto h-auto min-h-full min-w-full"
          />
          <img
            src="../../assets/home/tablet/beautiful-stories.jpg"
            alt="Man standing on pier"
            className="hidden md:block lg:hidden w-auto h-auto min-h-full min-w-full"
          />
          <img
            src="../../assets/home/desktop/beautiful-stories.jpg"
            alt="Man standing on pier"
            className="hidden lg:block w-auto h-auto min-h-full min-w-full object-cover object-center"
          />
        </div>
        <div className="section-paragraph py-20 px-12 bg-pureWhite text-pureBlack md:order-2 md:py-44 md:col-span-3 lg:px-16 xl:px-24 lg:col-span-2 md:flex md:flex-col md:justify-center">
          <h1 className="text-4xl tracking-wide uppercase text-left font-bold md:text-5xl lg:text-4xl xl:text-5xl md:tracking-[0.260625rem] leading-tight md:leading-tight lg:leading-tight xl:leading-tight">
            Beautiful Stories Every Time
          </h1>
          <p className="text-base font-normal opacity-60 leading-6 mt-4 lg:mt-6 xl:text-lg">
            We provide design templates to ensure your stories look terrific.
            Easily add photos, text, embed maps and media from other networks.
            Then share your story with everyone.
          </p>
          <div className="link-container flex items-center space-x-3 mt-4 cursor-pointer lg:mt-8 ">
            <p className=" uppercase tracking-x-wide text-xs hover:underline lg:text-sm">
              View The Stories
            </p>
            <ArrowIcon className=" stroke-pureBlack" />
          </div>
        </div>
      </section>

      <section className="section-1 md:grid md:grid-cols-5">
        <div className="md:order-2 md:col-span-2 lg:col-span-3">
          <img
            src="../../assets/home/mobile/designed-for-everyone.jpg"
            alt="Man standing on pier"
            className="md:hidden w-auto h-auto min-h-full min-w-full"
          />
          <img
            src="../../assets/home/tablet/designed-for-everyone.jpg"
            alt="Man standing on pier"
            className="hidden md:block lg:hidden w-auto h-auto min-h-full min-w-full"
          />
          <img
            src="../../assets/home/desktop/designed-for-everyone.jpg"
            alt="Man standing on pier"
            className="hidden lg:block w-auto h-auto min-h-full min-w-full object-cover object-center"
          />
        </div>
        <div className="section-paragraph py-20 px-12 bg-pureWhite text-pureBlack md:order-1 md:py-44 md:col-span-3 lg:px-16 xl:px-24 lg:col-span-2 md:flex md:flex-col md:justify-center">
          <h1 className="text-4xl tracking-wide uppercase text-left font-bold md:text-5xl lg:text-4xl xl:text-5xl md:tracking-[0.260625rem] leading-tight md:leading-tight lg:leading-tight xl:leading-tight">
            Designed for Everyone
          </h1>
          <p className="text-base font-normal opacity-60 leading-6 mt-4 lg:mt-6 xl:text-lg">
            Photosnap can help you create stories that resonate with your
            audience. Our tool is designed for photographers of all levels,
            brands, businesses you name it.
          </p>
          <div className="link-container flex items-center space-x-3 mt-4 cursor-pointer lg:mt-8 ">
            <p className=" uppercase tracking-x-wide text-xs hover:underline lg:text-sm">
              View The Stories
            </p>
            <ArrowIcon className=" stroke-pureBlack" />
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

      <section className="flex flex-col px-10 py-16 space-y-12 lg:flex-row lg:items-center lg:space-y-0 lg:py-24">
        <FeatureItem
          icon="responsive"
          title="100% Responsive"
          infomation="No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."
        />
        <FeatureItem
          icon="noLimit"
          title="No Photo Upload Speed"
          infomation="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."
        />
        <FeatureItem
          icon="embed"
          title="Available to Embed"
          infomation="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. "
        />
      </section>
    </>
  );
};

export default HomePage;
