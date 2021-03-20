import LandingLayout from './components/landingLayout';
import { borrowersContent } from './content/content';

export default function Home() {
  return (
		<>
			<LandingLayout
        pageContent={borrowersContent}
        pageHeroText='Borrowers'
        pageHeroColor="#EDE9E5"
        pageHeroBg="mustard"
        pageContentBg='#EDE9E5'
      />
		</>
  )
}
