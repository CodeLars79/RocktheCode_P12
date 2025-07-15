import Button from '../../components/Button/Button'
import './HomeSection.css'

const HomeSection = ({ title, text, buttonLabel, onNavigate }) => (
  <section className='home-section'>
    <h2>{title}</h2>
    <p>{text}</p>
    <Button onClick={onNavigate}>{buttonLabel}</Button>
  </section>
)

export default HomeSection
