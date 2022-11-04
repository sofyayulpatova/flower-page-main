import { FaChevronDown } from 'react-icons/fa'
import './contentHeader.css'

const ContentHeader = () => {
  return (
    <header className='content-header'>
      <h2>New Arrivals</h2>
      <div className='sort-box'>
        <h3>Sort by Price</h3>
        <FaChevronDown />
      </div>
    </header>
  )
}

export default ContentHeader
