import React from 'react';
import FeatureItem from '../../components/FeatureItem';
import {ReactComponent as ArrowIcon} from '../../assets/shared/desktop/arrow.svg';

const FeaturesPage = () => {
    return (
        <>
        <section className='section-1 md:flex '>
            <img src="../../assets/features/mobile/hero.jpg" alt="Person Holding Camera" className='md:order-2 md:hidden w-full' />
            <img src="../../assets/features/tablet/hero.jpg" alt="Person Holding Camera" className='md:order-2 hidden md:block lg:hidden w-full' />
            <img src="../../assets/features/desktop/hero.jpg" alt="Person Holding Camera" className='md:order-2 hidden md:hidden lg:block w-full' />
            <div className='section-paragraph py-20 px-8 bg-black text-pureWhite md:order-1 md:py-44 lg:px-24'>
                <h1 className='text-3xl tracking-x-med uppercase text-left font-bold md:text-[2.5rem] md:tracking-[0.260625rem] md:leading-10'>Features</h1>
                <p className='text-base  font-normal opacity-60 leading-6 mt-4 lg:mt-6'>We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.</p>
            </div>
        </section>

        <section className='flex flex-col space-y-20 py-16 px-4 md:grid md:grid-cols-2 md:space-y-0 md:gap-y-20 md:py-32 lg:grid-cols-3 lg:px-12'>
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
            <FeatureItem
              icon="custom" 
              title="Custom Domain" 
              infomation="With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!"
            />
            <FeatureItem
              icon="boost" 
              title="Boost Your Exposure" 
              infomation="Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list."
            />
            <FeatureItem
              icon="drag" 
              title="Drag & Drop Image" 
              infomation="Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories."
            />

        </section>

        <section className="beta-section flex flex-col bg-mobile-beta bg-cover bg-no-repeat py-12 px-6 
                            md:bg-tablet-beta md:flex-row md:px-6 md:py-24 md:justify-between
                            lg:bg-desktop-beta lg:justify-around lg:py-32 ">
            <h2 className=' text-3xl font-bold uppercase text-pureWhite tracking-x-med md:text-4xl md:w-1/2 lg:w-1/3'>We’re in beta. Get your invite today!</h2>
            <div className='link-container flex items-center space-x-3 mt-4 cursor-pointer lg:mt-8 '>
                <p className=' uppercase text-pureWhite tracking-x-med text-xs hover:underline lg:text-sm'>Get an Invite</p>
                <ArrowIcon className=' stroke-pureWhite'/>
            </div>
        </section>
        </>
    );
};

export default FeaturesPage;