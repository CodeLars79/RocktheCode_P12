import './Filters.css'

const Filters = ({ searchTerm, setSearchTerm, sortOption, setSortOption }) => (
  <section className='controls-wrapper'>
    <div className='controls'>
      <input
        type='text'
        placeholder='Search by name...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value='az'>Name: A-Z</option>
        <option value='za'>Name: Z-A</option>
        <option value='year'>Year</option>
      </select>
    </div>
  </section>
)

export default Filters
