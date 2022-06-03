import React from 'react';
import StoriesCards from '../../components/StoriesCards';
import storiesItemsData from '../../stories.json';
import StoriesContainer from '../../components/StoriesContainer';
import {ReactComponent as ArrowIcon} from '../../assets/shared/desktop/arrow.svg';

const StoriesPage = () => {
  return (
    <>
      <header>
        <div className="img_container">
          <img
            src="../../assets/stories/tablet/moon-of-appalacia.jpg"
            alt=""
            className="block w-full object-cover md:hidden"
          />
        </div>
        <div className="content_container bg-pureBlack text-pureWhite md:bg-hazy-tablet md:bg-center md:bg-cover md:w-full h-full md:flex md:flex-col md:justify-center md:py-20 lg:bg-hazy-desktop lg:py-32">
          <div className="content px-8 py-12 lg:w-2/3 lg:px-16 xl:px-24">
            <h3 className="uppercase tracking-x-sm font-medium pb-4 md:w-1/2">
              LAST MONTH’S FEATURED STORY
            </h3>
            <h1 className="uppercase tracking-x-wide text-4xl font-semibold pb-4 md:w-1/2">
              HAZY FULL MOON OF APPALACHIA
            </h1>
            <h3 className="text-gray-400 pb-4">
              March 2nd 2020{' '}
              <span className="text-pureWhite">by John Appleseed</span>
            </h3>
            <p className="text-gray-400 leading-7 pb-4 md:w-8/12">
              The dissected plateau area, while not actually made up of
              geological mountains, is popularly called "mountains," especially
              in eastern Kentucky and West Virginia, and while the ridges are
              not high, the terrain is extremely rugged.
            </p>
            <div className="link-container flex items-center space-x-3 mt-4 cursor-pointer lg:mt-8 ">
              <p className=" uppercase tracking-x-wide text-xs hover:underline lg:text-sm">
                Read the story
              </p>
              <ArrowIcon className=" stroke-pureWhite" />
            </div>
          </div>
        </div>
      </header>
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
        {storiesItemsData
          .filter((media) => !media.isHomepage && !media.isMainCard)
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

export default StoriesPage;
