import React from 'react';
import LandingLayout from './components/landingLayout';
import { primaryInvestorContent, secondaryInvestorContent } from './content/content';

const Investors = () => {
  return (
    <div>
      <LandingLayout 
        pageContent={primaryInvestorContent}
        pageContent2={secondaryInvestorContent}
        pageHeroText='Time is money, literally'
        pageHeroColor="#DBF6F8"
        pageHeroBg="secondary"
        pageContentBg='#DBF6F8'
      />
    </div>
  );
}

export default Investors;