import React from 'react';
import LogoBrand from '../LogoBrand';
import {ReactComponent as FacebookIcon} from '../../assets/shared/desktop/facebook.svg';
import {ReactComponent as YoutubeIcon} from '../../assets/shared/desktop/youtube.svg';
import {ReactComponent as TwitterIcon} from '../../assets/shared/desktop/twitter.svg';
import {ReactComponent as PinterestIcon} from '../../assets/shared/desktop/pinterest.svg';
import {ReactComponent as InstagramIcon} from '../../assets/shared/desktop/instagram.svg';
import {ReactComponent as ArrowIcon} from '../../assets/shared/desktop/arrow.svg';

// TODO: Can figure out the xl size layout. 

const Footer = () => {
    return (
        <footer className=' bg-pureBlack grid grid-rows-1 gap-2 justify-items-center pt-16 pb-16 space-y-8 md:grid-cols-2 md:grid-rows-3 md:place-items-center  md:px-16 md:space-y-0 md:gap-10 md:pb-16 md:pt-20  '>
            <LogoBrand fontColor='text-pureWhite' />
            {/** TODO: Not sure why the icons have a gradient background */}
            <div className='social-icons flex space-x-2 order-2 
                             md:order-6 md:justify-self-start'>
                <FacebookIcon className='cursor-pointer fill-slate-50' />
                <YoutubeIcon className='cursor-pointer fill-slate-50' />
                <TwitterIcon className='cursor-pointer fill-slate-50' />
                <PinterestIcon className='cursor-pointer fill-slate-50' />
                <InstagramIcon className='cursor-pointer fill-slate-50' />
            </div>
            <ul className='page-links flex flex-col order-3 text-pureWhite text-center space-y-4 pt-6 
                           md:flex-row md:text-left md:order-3 md:items-baseline md:space-x-4 md:pt-0 md:space-y-0 md:justify-self-start '>
                <li className=' text-xs font-bold tracking-widest uppercase'>Home</li>
                <li className=' text-xs font-bold tracking-widest uppercase'>Stories</li>
                <li className=' text-xs font-bold tracking-widest uppercase'>Features</li>
                <li className=' text-xs font-bold tracking-widest uppercase'>Pricing</li>
            </ul>
            <div className='get-invite text-pureWhite order-4 flex items-center space-x-3 pt-16 pb-16 md:order-2 md:pt-0 md:pb-0 md:justify-self-end'>
                <p className='uppercase text-sm tracking-widest'>Get An Invite</p>
                <ArrowIcon className=' stroke-pureWhite'/>
            </div>

            <div className='copyright order-5 text-zinc-500 md:row-span-4 md:justify-self-end'>
                <p>Copyright 2019. All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;