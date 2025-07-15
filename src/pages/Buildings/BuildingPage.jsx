import { useParams } from 'react-router-dom'
import buildingList from '../../data/buildingList'
import './BuildingPage.css'

const BuildingPage = () => {
  const { slug } = useParams()
  const building = buildingList.find((b) => b.slug === slug)

  if (!building) return <p>Building not found</p>

  const handleLearnMore = () => {
    window.open(building.wikiUrl, '_blank')
  }

  return (
    <div className='building-page'>
      <h2>{building.name}</h2>
      <img src={building.image} alt={building.name} />
      <h3>Location: {building.location}</h3>
      <h3>Year: {building.year}</h3>

      <div className='building-content'>
        <p>
          {building.text.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>
      <a
        href={building.wikiUrl}
        target='_blank'
        rel='noopener noreferrer'
        className='simple-link'
      >
        Read more...
      </a>
    </div>
  )
}

export default BuildingPage
