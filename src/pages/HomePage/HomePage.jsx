import React from 'react';
import StoriesCards from '../../components/StoriesCards';
import storiesItemsData from '../../stories.json';
import StoriesContainer from '../../components/StoriesContainer';

const HomePage = () => {
  return (
    <>
      <h1 className="text-2xl">Homepage</h1>
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
