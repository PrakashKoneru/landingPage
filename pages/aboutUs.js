import React from 'react';
import LandingLayout from './components/landingLayout';
import { aboutUsContent } from '../content/content';

const AboutUs = () => {
  return (
    <div>
      <LandingLayout 
        pageContent={aboutUsContent}
        pageHeroText='Time is money, literally'
        pageHeroColor="#EBEDF7"
        pageHeroBg="primary"
        pageContentBg='#EBEDF7'
      />
    </div>
  );
}

export default AboutUs;