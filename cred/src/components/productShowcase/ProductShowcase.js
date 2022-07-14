import React, { useEffect, useRef, useState } from 'react'
import './productShowcase.css'

export default function ProductShowcase() {
    const ref=useRef(null);
    const [showAnimation,setshowAnimation]=useState(false);

    const toggleAnimation=(e)=>{
        if(e[0].isIntersecting)
        {
            setshowAnimation(true);
    }
}

    const options={
        root:null,
        rootMargins:"0px",
        threshold:0.5,
    };

    useEffect(()=>{
        const observer=new IntersectionObserver(toggleAnimation,options);

        if(!showAnimation){
            if(ref.current){
                observer.observe(ref.current);
            }
        }

        return () => {
            if(ref.current){
                observer.unobserve(ref.current);
            }
        };
    });

    return (
        <div className={`product-showcase ${showAnimation?'scale-in-bottom':''}`} ref={ref}>
         { showAnimation &&  <div className="showcase-wrapper">
                <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-2.png" alt="product-image" className="showcase-ui showcase-mockup1" />
                <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-1.png" alt="product-image" className="showcase-ui showcase-mockup2" />
                <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/center.png" alt="product-image" className="showcase-ui showcase-mockup3" />
                <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-1.png" alt="product-image" className="showcase-ui showcase-mockup4" />
                <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-2.png" alt="product-image" className="showcase-ui showcase-mockup5" />
            </div>}
        </div>
    )
}
