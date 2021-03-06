import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {ReactComponent as MenuIcon} from '../../assets/shared/mobile/menu.svg';
import {ReactComponent as CloseIcon} from '../../assets/shared/mobile/close.svg';
import {ReactComponent as Logo} from '../../assets/shared/desktop/logo.svg';

const Navbar = () => {
  const [navMenuShow, setNavMenuShown] = useState(false);

  /** menuVariants and linkVariants are both Framer Motion varibles used to add some aninmation to the menu */
  const menuVariants = {
    opened: {
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.65,
      },
    },
    closed: {
      top: '-90vh',
    },
  };

  const linkVariants = {
    opened: {
      opacity: 1,
    },
    closed: {
      opacity: 0,
      y: 0,
    },
  };

  return (
    <nav className="relative flex items-center justify-between px-6 py-6 z-50 md:justify-around">
      <Link to="/">
        <Logo className="" />
      </Link>
      <ul className="hidden md:flex md: space-x-12">
        <li className=" cursor-pointer uppercase text-sm tracking-wider font-bold hover:text-slate-400 lg:text-md">
          <Link to="/stories">Stories</Link>
        </li>
        <li className=" cursor-pointer uppercase text-sm tracking-wider font-bold hover:text-slate-400 lg:text-md">
          <Link to="/features">Features</Link>
        </li>
        <li className=" cursor-pointer uppercase text-sm tracking-wider font-bold hover:text-slate-400 lg:text-md">
          <Link to="/pricing">Pricing</Link>
        </li>
      </ul>
      <div className=" hidden md:block">
        <button className=" bg-pureBlack text-pureWhite px-8 py-3 text-sm font-bold uppercase hover:bg-slate-400 hover:text-black hover:border-white lg:text-md">
          Get An Invite
        </button>
      </div>
      <motion.div
        className="flex md:hidden h-4 w-4 cursor-pointer items-center"
        onClick={() => setNavMenuShown(!navMenuShow)}
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
      >
        {navMenuShow ? <CloseIcon /> : <MenuIcon />}
      </motion.div>

      {/** Mobile Menu */}
      <motion.div
        animate={navMenuShow ? 'opened' : 'closed'}
        variants={menuVariants}
        className={`${
          navMenuShow ? 'block' : 'hidden'
        } container absolute px-6 py-8 text-center bg-pureWhite  mx-auto top-12 left-0 right-0 w-full divide-y divide-[#968d8d] md:!hidden `}
      >
        <div className="">
          <motion.h3
            variants={linkVariants}
            className="pb-3 tracking-wider text-md cursor-pointer font-bold uppercase"
          >
            <Link to="/stories">Stories</Link>
          </motion.h3>
          <motion.h3
            variants={linkVariants}
            className="pb-3 tracking-wider text-md cursor-pointer font-bold uppercase"
          >
            <Link to="/features">Features</Link>
          </motion.h3>
          <motion.h3
            variants={linkVariants}
            className="pb-3 tracking-wider text-md cursor-pointer font-bold uppercase"
          >
            <Link to="/pricing">Pricing</Link>
          </motion.h3>
        </div>
        <div className="pt-4">
          <motion.button
            variants={linkVariants}
            className=" bg-pureBlack text-pureWhite w-full px-4 py-2 font-medium tracking-widest text-sm  uppercase"
          >
            Get An Invite
          </motion.button>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
