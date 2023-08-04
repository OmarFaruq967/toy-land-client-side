import React from 'react';
import p1 from '../../../public/images/gallery/P1.png';
import p2 from '../../../public/images/gallery/P2.png';
import p3 from '../../../public/images/gallery/P3.png';
import p4 from '../../../public/images/gallery/P4.png';
import p5 from '../../../public/images/gallery/P5.png';
import p6 from '../../../public/images/gallery/P6.png';
import p7 from '../../../public/images/gallery/P7.png';
import p8 from '../../../public/images/gallery/P8.png';
import p9 from '../../../public/images/gallery/P9.png';
import p10 from '../../../public/images/gallery/P10.png';
import p11 from '../../../public/images/gallery/P11.png';
import p12 from '../../../public/images/gallery/P12.png';

const GalleryPhoto = () => {
    return (
        <div className='mx-20 my-20'>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full border rounded-lg" src={p1} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full border shadow-inner rounded-lg" src={p2} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full border rounded-lg" src={p3} alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full border rounded-lg" src={p4} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full border rounded-lg" src={p5} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full border rounded-lg" src={p6} alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full border rounded-lg" src={p7} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full border rounded-lg" src={p8} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full border rounded-lg" src={p9} alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full border rounded-lg" src={p10} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full border rounded-lg" src={p11} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full border rounded-lg" src={p2} alt=""/>
               
        </div>
    </div>
</div>
        </div>
    );
};

export default GalleryPhoto;