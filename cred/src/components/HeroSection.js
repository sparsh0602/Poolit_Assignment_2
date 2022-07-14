import React from 'react'
import Button from './common/button/Button'
import './heroSection.css'
export default function HeroSection() {
    return (
        <div className="hero-section-wrapper">

            <div className="flex absolute-center hero-label">
                <div>pay credit card bill. earn guaranteed ₹200 back.</div>
                <div className="claim-anchor">claim now <img src="https://web-images.credcdn.in/_next/assets/images/home-page/arrow.png" alt="arrow-image" className="claim-arrow"/></div>
            </div>

            <div className="flex absolute-center flex-col max-width hero-section">
                <div className="hero-heading">rewards for paying credit card bills.</div>
                <div className="hero-subheading">join 9M+ members who win rewards and cashbacks everyday</div>
            <Button buttonText="Download CRED"/>
            </div>

        </div>
    )
}
