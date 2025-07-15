import './HomeHero.css'

const HomeHero = () => {
  return (
    <section className='home'>
      <div className='home-hero'>
        <img
          src='/assets/AntoniGaudi.jpg'
          alt='Antoni Gaudí'
          className='antoni-gaudi-image'
        />
        <div className='hero-text'>
          <h1>Discover the extraordinary architectural legacy of</h1>
          <img
            src='/assets/signature.png'
            alt='Gaudí Signature'
            className='signature'
          />
        </div>
      </div>
    </section>
  )
}

export default HomeHero
