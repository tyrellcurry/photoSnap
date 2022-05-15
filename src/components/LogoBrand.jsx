import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as LogoTriangle} from '../assets/shared/mobile/logoTriangle.svg'

/* This is the component for the logo brand that will also be use in the footer.  */
const LogoBrand = () => {
    return (
        <div>
            <Link to="/"  className='flex items-baseline space-x-1 cursor-pointer'>
                <LogoTriangle className='h-4 w-4'/> {/**<----- TODO:  I need to find a way to fix the gradient on the logo triangle */}
                <div className='brand-name font-bold text-xl'>PHOTOSNAP</div>
            </Link>
        </div>
    );
};

export default LogoBrand;