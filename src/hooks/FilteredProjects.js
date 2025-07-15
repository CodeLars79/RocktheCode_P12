import { useMemo } from 'react'

const useFilteredProjects = (projects, searchTerm, sortOption) => {
  return useMemo(() => {
    return projects
      .filter((project) =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        if (sortOption === 'az') {
          return a.name.localeCompare(b.name)
        } else if (sortOption === 'za') {
          return b.name.localeCompare(a.name)
        } else if (sortOption === 'year') {
          const yearA = parseInt(a.year.split('-')[0])
          const yearB = parseInt(b.year.split('-')[0])
          return yearA - yearB
        } else {
          return 0
        }
      })
  }, [projects, searchTerm, sortOption])
}

export default useFilteredProjects
