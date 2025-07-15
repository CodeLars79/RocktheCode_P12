import './InfoWindow.css'

const InfoWindow = ({ title, photo, link }) => {
  return (
    <div className='info-window'>
      <h3>{title}</h3>
      <img src={photo} alt={title} className='info-window-img' />
      <a href={link} target='_blank' rel='noopener noreferrer'>
        WIKI
      </a>
    </div>
  )
}

export default InfoWindow
