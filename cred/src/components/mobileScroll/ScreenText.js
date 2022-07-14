import React from 'react'
import './mobileScroll.css'
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
export default function ScreenText(props) {
    const ref=useRef(null);
    const [showAnimation,setshowAnimation]=useState(false);

    const toggleAnimation=(e)=>{
        if(e[0].isIntersecting)
        {
            setshowAnimation(true);
            props.setcurrentImage(props.i);
    }
}

    const options={
        root:null,
        rootMargins:"0px",
        threshold:0.6,
    };

    useEffect(()=>{
        const observer=new IntersectionObserver(toggleAnimation,options);

        
            if(ref.current){
                observer.observe(ref.current);
            }


        return () => {
            if(ref.current){
                observer.unobserve(ref.current);
            }
        };
    });
  return (
    <div className={`screen-text ${showAnimation?"text-visible":""}`} ref={ref}>
        <div className="screen-heading">
            {props.screen.heading}
        </div>
        <div className="mobile-mockup-wrapper only-mobile">
            <div className="mobile-mockup">
                <div className="mobile-mockup-screen flex absolute-center">
                    <img src={props.screen.mobile_img} className="mobile-screen-image"/>
                </div>
            </div>
        </div>
        <div className="screen-description">{props.screen.description}</div>
    </div>
  )
}
