import React from 'react';
import {Link} from 'react-router-dom';
import LogoBrand from '../LogoBrand';
import {ReactComponent as FacebookIcon} from '../../assets/shared/desktop/facebook.svg';
import {ReactComponent as YoutubeIcon} from '../../assets/shared/desktop/youtube.svg';
import {ReactComponent as TwitterIcon} from '../../assets/shared/desktop/twitter.svg';
import {ReactComponent as PinterestIcon} from '../../assets/shared/desktop/pinterest.svg';
import {ReactComponent as InstagramIcon} from '../../assets/shared/desktop/instagram.svg';
import {ReactComponent as ArrowIcon} from '../../assets/shared/desktop/arrow.svg';

const Footer = () => {
  return (
    <div>
      {/* Ty's version */}
      <footer className="bg-pureBlack py-10 flex flex-col items-center md:flex-row md:justify-between md:items-baseline md:px-12">
        <div className="left">
          <div className="flex-container lg:flex lg:flex-row">
            <div className="desktop-separation lg:pr-14">
              <div className="title flex justify-center py-2 md:justify-start lg:pt-0">
                <Link to="/">
                  <LogoBrand fontColor="text-pureWhite" />
                </Link>
              </div>
              <div className="reverse flex flex-col-reverse md:flex-col">
                <div className="nav flex justify-center py-4 lg:hidden">
                  <ul className="text-pureWhite flex flex-col text-center md:flex-row">
                    <Link to="/">
                      <li className=" text-xs font-medium tracking-x-wide uppercase cursor-pointer pb-4 md:pr-2">
                        Home
                      </li>
                    </Link>
                    <Link to="/stories">
                      <li className=" text-xs font-medium tracking-x-wide uppercase cursor-pointer pb-4 md:pr-2">
                        Stories
                      </li>
                    </Link>
                    <Link to="/features">
                      <li className=" text-xs font-medium tracking-x-wide uppercase cursor-pointer pb-4 md:pr-2">
                        Features
                      </li>
                    </Link>
                    <Link to="/pricing">
                      <li className=" text-xs font-medium tracking-x-wide uppercase cursor-pointer">
                        Pricing
                      </li>
                    </Link>
                  </ul>
                </div>
                <div className="socials flex justify-center py-6 md:justify-start lg:pt-20 lg:pb-0">
                  <FacebookIcon className="cursor-pointer mr-2 md:mr-3 fill-slate-50" />
                  <YoutubeIcon className="cursor-pointer mr-2 md:mr-3 fill-slate-50" />
                  <TwitterIcon className="cursor-pointer mr-2 md:mr-3 fill-slate-50" />
                  <PinterestIcon className="cursor-pointer mr-2 md:mr-3 fill-slate-50" />
                  <InstagramIcon className="cursor-pointer fill-slate-50" />
                </div>
              </div>
            </div>
            <div className="hidden desktop-nav lg:flex lg:items-center">
              <ul className="text-pureWhite flex flex-col text-center lg:text-left">
                <Link to="/">
                  <li className=" text-xs font-medium tracking-x-wide uppercase cursor-pointer pb-4 md:pr-2 hover:text-gray-500">
                    Home
                  </li>
                </Link>
                <Link to="/stories">
                  <li className=" text-xs font-medium tracking-x-wide uppercase cursor-pointer pb-4 md:pr-2 hover:text-gray-500">
                    Stories
                  </li>
                </Link>
                <Link to="/features">
                  <li className=" text-xs font-medium tracking-x-wide uppercase cursor-pointer pb-4 md:pr-2 hover:text-gray-500">
                    Features
                  </li>
                </Link>
                <Link to="/pricing">
                  <li className=" text-xs font-medium tracking-x-wide uppercase cursor-pointer hover:text-gray-500">
                    Pricing
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="flex-container">
            <div className="arrow flex justify-center items-center pt-20 pb-8 md:pt-0 md:justify-end ">
              <p className="uppercase text-sm tracking-x-med text-pureWhite pr-5 cursor-pointer lg:hover:underline">
                Get An Invite
              </p>
              <ArrowIcon className=" stroke-pureWhite cursor-pointer" />
            </div>
            <div className="copyright text-zinc-500 md:pt-16 lg:pt-14">
              <p>Copyright 2019. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
