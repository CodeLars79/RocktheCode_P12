import { Route, Routes } from 'react-router-dom'
import useScrollToTop from './hooks/ScrollToTop'
import GoToTop from './components/GoToTop/GoToTop'

import Home from './pages/Home/Home'
import Map from './pages/Map/Map'
import Buildings from './pages/Buildings/Buildings'
import BuildingPage from './pages/Buildings/BuildingPage'
import Quiz from './pages/Quiz/Quiz'
import About from './pages/About/About'
import NotFound from './pages/NotFound/NotFound'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const App = () => {
  useScrollToTop()

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='map' element={<Map />} />
          <Route path='buildings' element={<Buildings />} />
          <Route path='/buildings/:slug' element={<BuildingPage />} />
          <Route path='quiz' element={<Quiz />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <GoToTop />
    </>
  )
}

export default App
