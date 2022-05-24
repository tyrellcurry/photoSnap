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
          <div className="content py-16 text-pureWhite px-10">
            <h1 className="pb-5 uppercase tracking-x-wide font-semibold text-4xl">
              Pricing
            </h1>
            <p className="text-gray-400 leading-8 text-lg">
              Create a your stories, Photosnap is a platform for photographers
              and visual storytellers. It’s the simple way to create and share
              your photos.
            </p>
          </div>
        </section>
        <section className="px-10">
          <div className="toggle-container flex items-center text-2xl font-medium justify-evenly px-6 py-20">
            <div className="monthly">
              <h3
                className={`${!isActive ? 'text-pureBlack' : 'text-gray-400'}`}
              >
                Monthly
              </h3>
            </div>
            <div className="toggle w-16 cursor-pointer" onClick={toggleClass}>
              <div className="bg bg-slate-400 rounded-full p-1">
                <div
                  className={`circle h-6 w-6 bg-black rounded-full transition-all ${
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
        </section>
      </main>
    </>
  );
};

export default PricingPage;
