import React, { useState } from 'react'
import './main.css'
import Sidebar from '../sidebar/Sidebar'
import Content from '../content/Content'
import useFetch from '../../customHook/useFetch'
let url = 'https://blumlinge2.herokuapp.com/api/smallbouquet/'

const Main = () => {
  const { data } = useFetch(url)
  const categories = [...new Set(data.map((item) => item.type))]
  const [filter, setFilter] = useState('')
  const [value, setValue] = useState([1, 10])

  function valuetext(value) {
    return `${value}asc`
  }

  function filterItems(items) {
    return items.filter((item) => 
        item.type.includes(filter) &&
        item.price >= value[0] &&
        item.price <= value[1]
      )
  }

  return (
    <main className='main-container'>
      <Sidebar
        setFilter={setFilter}
        categories={categories}
        valuetext={valuetext}
        setValue={setValue}
        value={value}
      />
      <Content filterItems={filterItems} />
    </main>
  )
}

export default Main
