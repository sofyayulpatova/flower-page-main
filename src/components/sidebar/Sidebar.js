import './sidebar.css'
import Slider from '@mui/material/Slider'
import { FaChevronUp } from 'react-icons/fa'

const Sidebar = ({
  setFilter,
  categories,
  setValue,
  value,
  valuetext,
}) => {

  const handleClick = (e) => {
    setFilter(e.target.dataset.name)
    toggleClass(e.target)
  }

  const setAllItems = (e) => {
    setFilter('')
    toggleClass(e.target)
  }

  function toggleClass(el) {
    if (el.classList.contains('clicked-category')) {
      el.classList.remove('clicked-category')
      el.classList.add('unclicked-category')
    } else {
      for (const child of el.parentElement.childNodes) {
        child.classList.remove('clicked-category')
        el.classList.add('unclicked-category')
      }
      el.classList.remove('unclicked-category')
      el.classList.add('clicked-category')
    }
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <aside className='sidebar'>
      <div className='filter-header'>
        <div className='filter-box'>
          <h3>Categories</h3>
          <FaChevronUp />
        </div>
      </div>
      <div className='category-list'>
        <ul>
            <li className='category-item' onClick={(e) => setAllItems(e)}>All</li>
          {categories.map((category) => (
            <li
              data-name={category}
              className='category-item'
              onClick={(e) => handleClick(e)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className='price-range-container'>
        <h3>Price Range</h3>
        <div className='slider-container'>
          <Slider
            aria-label='Always visible'
            defaultValue={1}
            step={1}
            min={1}
            max={10}
            getAriaLabel={() => 'Price range'}
            value={value}
            onChange={handleChange}
            valueLabelDisplay='on'
            getAriaValueText={valuetext}
          />
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
