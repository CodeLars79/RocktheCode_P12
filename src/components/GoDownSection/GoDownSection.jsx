import { useEffect, useState } from 'react'
import './GoDownSection.css'

const GoDownSection = ({ targetId }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < window.innerHeight * 0.8)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollDown = () => {
    const target = document.getElementById(targetId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <button
      className={`scroll-down-button ${isVisible ? 'show' : ''}`}
      onClick={handleScrollDown}
      aria-label='Scroll to next section'
    >
      ↓
    </button>
  )
}

export default GoDownSection
