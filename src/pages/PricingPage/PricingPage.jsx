import React, {useState} from 'react';

const PricingPage = () => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <>
      <main>
        <section className="banner bg-pureBlack">
          <div className="image">
            <img
              src="../../assets/pricing/mobile/hero.jpg"
              alt=""
              srcset=""
              className="object-cover w-full"
            />
          </div>
          <div className="content py-16 text-pureWhite px-8">
            <h1 className="pb-4 uppercase tracking-x-wide font-semibold text-3xl">
              Pricing
            </h1>
            <p className="text-gray-400 leading-8 text-md">
              Create a your stories, Photosnap is a platform for photographers
              and visual storytellers. It’s the simple way to create and share
              your photos.
            </p>
          </div>
        </section>
        <section className="px-8">
          <div className="toggle-container flex items-center text-2xl font-medium justify-evenly pt-16 pb-14">
            <div className="monthly">
              <h3
                className={`${!isActive ? 'text-pureBlack' : 'text-gray-400'}`}
              >
                Monthly
              </h3>
            </div>
            <div className="toggle cursor-pointer" onClick={toggleClass}>
              <div className="bg bg-medGrey rounded-full p-1 w-16 min-w-16">
                <div
                  className={`circle h-6 w-6 bg-black rounded-full transition-all duration-100 ${
                    isActive ? 'ml-x-l' : null
                  }`}
                ></div>
              </div>
            </div>
            <div className="yearly">
              <h3 className={`${!isActive ? 'text-gray-400' : null}`}>
                Yearly
              </h3>
            </div>
          </div>
          <div className="plans flex flex-col lg:flex-row lg:px-40">
            <div className="basic bg-lightGrey text-center px-6 py-10 flex flex-col justify-center mb-8 lg:mb-0 lg:mr-8 lg:py-16 lg:px-14">
              <div className="content">
                <h3 className="font-medium text-3xl pb-4 lg:pb-6">Basic</h3>
                <p className="text-gray-500 leading-6 pb-8 lg:pb-12">
                  Includes basic usage of our platform. Recommended for new and
                  aspiring <br /> photographers.
                </p>
              </div>
              <div className="price pb-8">
                <h3 className="font-medium text-5xl pb-1">{`${
                  !isActive ? '$19.99' : '$190.00'
                }`}</h3>
                <p className="text-gray-500 lg:pb-4">{`${
                  !isActive ? 'per month' : 'per year'
                }`}</p>
              </div>
              <div className="button">
                <button className="bg-pureBlack w-full py-3 text-pureWhite uppercase tracking-x-med text-sm font-medium">
                  Pick plan
                </button>
              </div>
            </div>
            <div className="pro bg-pureBlack text-center px-6 py-10 flex flex-col justify-center mb-8 lg:mb-0 lg:mr-8">
              <div className="content">
                <h3 className="font-medium text-3xl pb-4 text-pureWhite">
                  Pro
                </h3>
                <p className="leading-6 pb-8 text-gray-500">
                  More advanced features available. Recommended for photography
                  veterans and professionals.
                </p>
              </div>
              <div className="price pb-8">
                <h3 className="font-medium text-5xl pb-1 text-pureWhite">
                  {`${!isActive ? '$39.99' : '$390.00'}`}
                </h3>
                <p className="text-gray-500">{`${
                  !isActive ? 'per month' : 'per year'
                }`}</p>
              </div>
              <div className="button">
                <button className="bg-pureWhite w-full py-3 text-pureBlack uppercase tracking-x-med text-sm font-medium">
                  Pick plan
                </button>
              </div>
            </div>
            <div className="business bg-lightGrey text-center px-6 py-10 flex flex-col justify-center">
              <div className="content">
                <h3 className="font-medium text-3xl pb-4">Business</h3>
                <p className="text-gray-500 leading-6 pb-8">
                  Additional features available such as more detailed metrics.
                  Recommended for business owners.
                </p>
              </div>
              <div className="price pb-8">
                <h3 className="font-medium text-5xl pb-1">{`${
                  !isActive ? '$99.99' : '$990.00'
                }`}</h3>
                <p className="text-gray-500">{`${
                  !isActive ? 'per month' : 'per year'
                }`}</p>
              </div>
              <div className="button">
                <button className="bg-pureBlack w-full py-3 text-pureWhite uppercase tracking-x-med text-sm font-medium">
                  Pick plan
                </button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="hidden md:block header uppercase text-center text-5xl font-semibold tracking-x-sm pt-24 pb-10">
            <h2>compare</h2>
          </div>
          <div className="features px-8 pt-10 lg:px-32 xl:px-60">
            <div className="headers flex justify-between">
              <div className="title_main">
                <h3 className="uppercase font-semibold tracking-x-med pb-6 md:font-medium">
                  The Features
                </h3>
              </div>
              <div className="title_desktop hidden md:flex w-2/3 justify-around">
                <h3 className="uppercase font-medium pl-7 tracking-x-med">
                  Basic
                </h3>
                <h3 className="uppercase font-medium pl-7 tracking-x-med">
                  Pro
                </h3>
                <h3 className="uppercase font-medium pl-4 tracking-x-med">
                  Business
                </h3>
              </div>
            </div>
            <hr className="py-4 border-black border-t-2" />
            {/* break */}
            <div className="story pb-8 md:flex md:justify-between md:pl-6 md:pb-10">
              <div className="title">
                <h3 className="pb-4 font-medium uppercase tracking-x-med md:absolute">
                  UNLIMITED STORY POSTING
                </h3>
              </div>
              <div className="checks flex w-5/6 md:w-2/3 justify-between md:justify-around">
                <div className="basic">
                  <h4 className="pb-1 tracking-x-sm text-gray-500 uppercase md:hidden">
                    Basic
                  </h4>
                  <img
                    src="../../assets/pricing/desktop/check.svg"
                    alt=""
                    srcset=""
                  />
                </div>
                <div className="pro">
                  <h4 className="pb-1 tracking-x-sm text-gray-500 uppercase md:hidden">
                    Pro
                  </h4>
                  <img
                    src="../../assets/pricing/desktop/check.svg"
                    alt=""
                    srcset=""
                  />
                </div>
                <div className="business">
                  <h4 className="pb-1 tracking-x-sm text-gray-500 uppercase  md:hidden">
                    Business
                  </h4>
                  <img
                    src="../../assets/pricing/desktop/check.svg"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
            </div>
            <hr className="pb-8 border-medGrey border-t-1" />
            {/* break */}
            <div className="photo pb-8 md:flex md:justify-between md:pl-6 md:pb-10">
              <div className="title">
                <h3 className="pb-4 font-medium uppercase tracking-x-med md:absolute">
                  UNLIMITED photo upload
                </h3>
              </div>
              <div className="checks flex w-5/6 md:w-2/3 justify-between md:justify-around">
                <div className="basic">
                  <h4 className="pb-1 tracking-x-sm text-gray-500 uppercase md:hidden">
                    Basic
                  </h4>
                  <img
                    src="../../assets/pricing/desktop/check.svg"
                    alt=""
                    srcset=""
                  />
                </div>
                <div className="pro">
                  <h4 className="pb-1 tracking-x-sm text-gray-500 uppercase md:hidden">
                    Pro
                  </h4>
                  <img
                    src="../../assets/pricing/desktop/check.svg"
                    alt=""
                    srcset=""
                  />
                </div>
                <div className="business">
                  <h4 className="pb-1 tracking-x-sm text-gray-500 uppercase  md:hidden">
                    Business
                  </h4>
                  <img
                    src="../../assets/pricing/desktop/check.svg"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
            </div>
            <hr className="pb-8 border-medGrey border-t-1" />
            {/* break */}
            <div className="embedding pb-8 md:flex md:justify-between md:pl-6 md:pb-10">
              <div className="title">
                <h3 className="pb-4 font-medium uppercase tracking-x-med md:absolute">
                  EMBEDDING CUSTOM CONTENT
                </h3>
              </div>
              <div className="checks flex w-5/6 md:w-2/3 justify-between md:justify-around">
                <div className="basic">
                  <h4 className="pb-1 tracking-x-sm text-gray-500 uppercase md:hidden">
                    Basic
                  </h4>
                  <img
                    src="../../assets/pricing/desktop/check.svg"
                    alt=""
                    srcset=""
                    className="invisible"
                  />
                </div>
                <div className="pro">
                  <h4 className="pb-1 tracking-x-sm text-gray-500 uppercase md:hidden">
                    Pro
                  </h4>
                  <img
                    src="../../assets/pricing/desktop/check.svg"
                    alt=""
                    srcset=""
                  />
                </div>
                <div className="business">
                  <h4 className="pb-1 tracking-x-sm text-gray-500 uppercase  md:hidden">
                    Business
                  </h4>
                  <img
                    src="../../assets/pricing/desktop/check.svg"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
            </div>
            <hr className="pb-8 border-medGrey border-t-1" />
            {/* break */}
            <div className="metadata pb-8 md:flex md:justify-between md:pl-6 md:pb-10">
              <div className="title">
                <h3 className="pb-4 font-medium uppercase tracking-x-med md:absolute">
                  CUSTOMIZE METADATA
                </h3>
              </div>
              <div className="checks flex w-5/6 md:w-2/3 justify-between md:justify-around">
                <div className="basic">
                  <h4 className="pb-1 tracking-x-sm text-gray-500 uppercase md:hidden">
                    Basic
                  </h4>
                  <img
                    src="../../assets/pricing/desktop/check.svg"
                    alt=""
                    srcset=""
                    className="invisible"
                  />
                </div>
                <div className="pro">
                  <h4 className="pb-1 tracking-x-sm text-gray-500 uppercase md:hidden">
                    Pro
                  </h4>
                  <img
                    src="../../assets/pricing/desktop/check.svg"
                    alt=""
                    srcset=""
                  />
                </div>
                <div className="business">
                  <h4 className="pb-1 tracking-x-sm text-gray-500 uppercase  md:hidden">
                    Business
                  </h4>
                  <img
                    src="../../assets/pricing/desktop/check.svg"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
            </div>
            <hr className="pb-8 border-medGrey border-t-1" />
            {/* break */}
            <div className="metrics pb-8 md:flex md:justify-between md:pl-6 md:pb-10">
              <div className="title">
                <h3 className="pb-4 font-medium uppercase tracking-x-med md:absolute">
                  ADVANCED METRICS
                </h3>
              </div>
              <div className="checks flex w-5/6 md:w-2/3 justify-between md:justify-around">
                <div className="basic">
                  <h4 className="pb-1 tracking-x-sm text-gray-500 uppercase md:hidden">
                    Basic
                  </h4>
                  <img
                    src="../../assets/pricing/desktop/check.svg"
                    alt=""
                    srcset=""
                    className="invisible"
                  />
                </div>
                <div className="pro">
                  <h4 className="pb-1 tracking-x-sm text-gray-500 uppercase md:hidden">
                    Pro
                  </h4>
                  <img
                    src="../../assets/pricing/desktop/check.svg"
                    alt=""
                    srcset=""
                    className="invisible"
                  />
                </div>
                <div className="business">
                  <h4 className="pb-1 tracking-x-sm text-gray-500 uppercase  md:hidden">
                    Business
                  </h4>
                  <img
                    src="../../assets/pricing/desktop/check.svg"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
            </div>
            <hr className="pb-8 border-medGrey border-t-1" />
            {/* break */}
            <div className="photo pb-8 md:flex md:justify-between md:pl-6 md:pb-10">
              <div className="title">
                <h3 className="pb-4 font-medium uppercase tracking-x-med md:absolute">
                  PHOTO DOWNLOADS
                </h3>
              </div>
              <div className="checks flex w-5/6 md:w-2/3 justify-between md:justify-around">
                <div className="basic">
                  <h4 className="pb-1 tracking-x-sm text-gray-500 uppercase md:hidden">
                    Basic
                  </h4>
                  <img
                    src="../../assets/pricing/desktop/check.svg"
                    alt=""
                    srcset=""
                    className="invisible"
                  />
                </div>
                <div className="pro">
                  <h4 className="pb-1 tracking-x-sm text-gray-500 uppercase md:hidden">
                    Pro
                  </h4>
                  <img
                    src="../../assets/pricing/desktop/check.svg"
                    alt=""
                    srcset=""
                    className="invisible"
                  />
                </div>
                <div className="business">
                  <h4 className="pb-1 tracking-x-sm text-gray-500 uppercase  md:hidden">
                    Business
                  </h4>
                  <img
                    src="../../assets/pricing/desktop/check.svg"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
            </div>
            <hr className="pb-8 border-medGrey border-t-1" />
            {/* break */}
            <div className="search pb-8 md:flex md:justify-between md:pl-6 md:pb-10">
              <div className="title">
                <h3 className="pb-4 font-medium uppercase tracking-x-med md:absolute">
                  SEARCH ENGINE INDEXING
                </h3>
              </div>
              <div className="checks flex w-5/6 md:w-2/3 justify-between md:justify-around">
                <div className="basic">
                  <h4 className="pb-1 tracking-x-sm text-gray-500 uppercase md:hidden">
                    Basic
                  </h4>
                  <img
                    src="../../assets/pricing/desktop/check.svg"
                    alt=""
                    srcset=""
                    className="invisible"
                  />
                </div>
                <div className="pro">
                  <h4 className="pb-1 tracking-x-sm text-gray-500 uppercase md:hidden">
                    Pro
                  </h4>
                  <img
                    src="../../assets/pricing/desktop/check.svg"
                    alt=""
                    srcset=""
                    className="invisible"
                  />
                </div>
                <div className="business">
                  <h4 className="pb-1 tracking-x-sm text-gray-500 uppercase  md:hidden">
                    Business
                  </h4>
                  <img
                    src="../../assets/pricing/desktop/check.svg"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
            </div>
            <hr className="pb-8 border-medGrey border-t-1" />
            {/* break */}
            <div className="analytics pb-8 md:flex md:justify-between md:pl-6 md:pb-10">
              <div className="title">
                <h3 className="pb-4 font-medium uppercase tracking-x-med md:absolute">
                  CUSTOM ANALYTICS
                </h3>
              </div>
              <div className="checks flex w-5/6 md:w-2/3 justify-between md:justify-around">
                <div className="basic">
                  <h4 className="pb-1 tracking-x-sm text-gray-500 uppercase md:hidden">
                    Basic
                  </h4>
                  <img
                    src="../../assets/pricing/desktop/check.svg"
                    alt=""
                    srcset=""
                    className="invisible"
                  />
                </div>
                <div className="pro">
                  <h4 className="pb-1 tracking-x-sm text-gray-500 uppercase md:hidden">
                    Pro
                  </h4>
                  <img
                    src="../../assets/pricing/desktop/check.svg"
                    alt=""
                    srcset=""
                    className="invisible"
                  />
                </div>
                <div className="business">
                  <h4 className="pb-1 tracking-x-sm text-gray-500 uppercase  md:hidden">
                    Business
                  </h4>
                  <img
                    src="../../assets/pricing/desktop/check.svg"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
            </div>
            <hr className="pb-8 border-medGrey border-t-1" />
          </div>
        </section>
      </main>
    </>
  );
};

export default PricingPage;
