import { useState } from 'react'
import './Buildings.css'
import Card from '../../components/Card/Card'
import buildingList from '../../data/buildingList'
import Filters from '../../components/Filters/Filters'
import GoDownSection from '../../components/GoDownSection/GoDownSection'
import useFilteredProjects from '../../hooks/FilteredProjects'

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortOption, setSortOption] = useState('az')

  const filteredList = useFilteredProjects(buildingList, searchTerm, sortOption)

  return (
    <>
      <section className='title'>
        <img src='./assets/icon.png' alt='Icon' className='icon-img' />
        <h2>Architectural Masterpieces</h2>
        <p>
          Explore the iconic works of Antoni Gaudí, a visionary architect whose
          creations have left an indelible mark on the world.
        </p>
        <GoDownSection targetId='filters' />
      </section>

      <section id='filters' className='filters'>
        <Filters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          sortOption={sortOption}
          setSortOption={setSortOption}
        />
      </section>

      <section className='projects' id='projects'>
        <div className='cards'>
          {filteredList.map((project) => (
            <Card
              key={project.name}
              image={project.image}
              name={project.name}
              location={project.location}
              year={project.year}
              slug={project.slug}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default Projects
