import React from 'react';
import StoriesCards from '../../components/StoriesCards';
import storiesItemsData from '../../stories.json';
import StoriesContainer from '../../components/StoriesContainer';

const StoriesPage = () => {
  return (
    <>
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
