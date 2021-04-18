import React from 'react';
import LandingLayout from './components/landingLayout';
import { secondaryInvestorContent } from '../content/content';

const Partnerships = () => {
  return (
    <div>
      <LandingLayout 
        pageContent={secondaryInvestorContent}
        pageHeroText='Time is money, literally'
        pageHeroColor="#D0F8DD"
        pageHeroBg="darkGreen"
        pageContentBg='#D0F8DD'
      />
    </div>
  );
}

export default Partnerships;