import React from 'react';
import {ReactComponent as BoostExposure} from '../assets/features/desktop/boost-exposure.svg'
import {ReactComponent as CustomDomain} from '../assets/features/desktop/custom-domain.svg'
import {ReactComponent as DragDrop} from '../assets/features/desktop/drag-drop.svg'
import {ReactComponent as Embed} from '../assets/features/desktop/embed.svg'
import {ReactComponent as NoLimit} from '../assets/features/desktop/no-limit.svg'
import {ReactComponent as Responsive} from '../assets/features/desktop/responsive.svg'

// 1. I was able to use the SVGs as props by using this object. Basically i had a value pointing to the SVG import name
const components = {
    boost: BoostExposure,
    custom: CustomDomain,
    drag: DragDrop,
    embed: Embed,
    noLimit: NoLimit,
    responsive: Responsive
}


const FeatureItem = ({icon, title, infomation}) => {
    const SVGItem = components[icon] //<--- 2. The Icon prop is used as a key retieve the correct component from the components object above and assigns it the the SVGItem variable
    
    return (
        <>
            <div className='flex-col space-y-4 px-6'>
                 {/** 3.  Now im able to use the the SVG Item here and can dynmically use any SVG I imported!! I can reuse this component for the  feature page  */}
                <SVGItem className="feature-item-icon mx-auto my-0"/> 
                <h2 className='feature-item-title text-center text-lg font-bold pt-8 '>{title}</h2>
                <p className='feature-item-paragraph text-center text-sm'>{infomation}</p>
            </div>
        </>
    );
};

export default FeatureItem;