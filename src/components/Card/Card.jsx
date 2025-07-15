import { Link } from 'react-router-dom'
import './Card.css'
import Button from '../Button/Button'

const Card = ({ image, name, location, year, slug }) => {
  return (
    <div className='card'>
      <img src={image} alt={name} className='image' />
      <div className='content'>
        <h3 className='name'>{name}</h3>
        <p className='location'>{location}</p>
        <p className='year'>{year}</p>
        <Link to={`/buildings/${slug}`}>
          <Button>Learn more</Button>
        </Link>
      </div>
    </div>
  )
}

export default Card
