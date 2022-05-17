const CATEGORIES = {
  DOG: '🐶',
  CAT: '🐱',
  RABBIT: '🐰',
  STINGRAY: '🐳',
}

const Filters = (props) => {
  const { handleChange } = props;

  const handleStatusChange = (e) => {
    if (e.target.value === 'all') {
      handleChange( { status: null } );
    } else {
      handleChange({ status: e.target.value });
    }
  }

  const handleCategoryChange = (e) => {
    if (e.target.value === 'all') {
      handleChange( { category: null } );
    } else {
      handleChange({ category: e.target.value });
    }
  }

  return (
    <div className="filters">
      <div className="filters__status">
        <div className="filters__item">
          <label className="filters__label">
            <input type="radio" value="all" name="status" onChange={handleStatusChange} />
            <span className="filters__text">ALL</span>
          </label>
        </div>
        <div className="filters__item">
          <label className="filters__label">
            <input type="radio" value="AVAILABLE" name="status" onChange={handleStatusChange} />
            <span className="filters__text">AVAILABLE</span>
          </label>
        </div>
        <div className="filters__item">
          <label className="filters__label">
            <input type="radio" value="CHECKEDOUT" name="status" onChange={handleStatusChange} />
            <span className="filters__text">CHECKEDOUT</span>
          </label>
        </div>
      </div>
      <div className="filters__category">
        <div className="filters__item">
          <select name="category" onChange={handleCategoryChange}>
            <option value="all">All</option>
            {Object.keys(CATEGORIES).map((key) => (
              <option key={key} value={key}>{CATEGORIES[key]}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default Filters
