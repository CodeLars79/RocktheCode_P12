import './Map.css'
import { useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'
import { mapLocations } from '../../data/mapLocations'
import { mapStyles } from '../../data/mapStyles'
import ReactDOMServer from 'react-dom/server'
import MapInfoWindow from '../../components/InfoWindow/InfoWindow'

const Map = () => {
  const mapRef = useRef(null)

  useEffect(() => {
    const loader = new Loader({
      apiKey: import.meta.env.VITE_API_KEY,
      version: 'weekly'
    })

    loader.load().then(() => {
      const google = window.google
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: 41.3874, lng: 2.1686 },
        zoom: 12,
        styles: mapStyles
      })

      const customIcon = {
        url: '/assets/pin.png',
        scaledSize: new google.maps.Size(25, 30)
      }
      const infoWindow = new google.maps.InfoWindow()

      mapLocations.forEach(({ position, title, photo, link }) => {
        const marker = new google.maps.Marker({
          position,
          map,
          title,
          icon: customIcon
        })

        const content = ReactDOMServer.renderToString(
          <MapInfoWindow title={title} photo={photo} link={link} />
        )

        marker.addListener('click', () => {
          infoWindow.setContent(content)
          infoWindow.open(map, marker)
        })
      })
    })
  }, [])

  return (
    <section className='map'>
      <div ref={mapRef} className='map-container' />
    </section>
  )
}

export default Map
