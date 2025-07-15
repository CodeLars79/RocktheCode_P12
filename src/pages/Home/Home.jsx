import './Home.css'
import { useNavigate } from 'react-router-dom'

import HomeHero from '../../components/HomeHero/HomeHero'
import HomeSection from '../../components/HomeSection/HomeSection'

const Home = () => {
  const navigate = useNavigate()

  return (
    <>
      <HomeHero />

      <HomeSection
        title='The locations'
        text='Antoni Gaudí is celebrated as the foremost figure of Catalan Modernism, with most of his iconic works located in Barcelona, Spain. The still-unfinished Sagrada Família stands as the most-visited monument in the country. Explore the map to discover the locations of all the masterpieces.'
        buttonLabel='Map'
        onNavigate={() => navigate('/map')}
      />

      <HomeSection
        title='The architecture'
        text='Gaudí left an indelible mark on the world of art and architecture. Over the years, seven of his creations have been recognized as UNESCO World Heritage Sites. Discover the architectural wonders!'
        buttonLabel='Buildings'
        onNavigate={() => navigate('/buildings')}
      />

      <HomeSection
        title='About'
        text="Antoni Gaudí's work continues to inspire global admiration. This site is a tribute to his architecture, artistic vision, and unmistakable cultural legacy. No ads and completely free."
        buttonLabel='Learn more'
        onNavigate={() => navigate('/about')}
      />
    </>
  )
}

export default Home
