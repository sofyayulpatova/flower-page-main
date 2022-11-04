import React, { useState, useRef, useEffect } from 'react'
import ContentHeader from '../contentHeader/ContentHeader'
import Loading from '../loading/Loading'
import './content.css'

import useFetch from '../../customHook/useFetch'
let url = 'https://blumlinge2.herokuapp.com/api/smallbouquet/'

const Content = ({ filterItems }) => {
  const { loading, data } = useFetch(url)

  // pagination function
  const [paginate, setpaginate] = useState(12)
  const loadData = (event) => {
    setpaginate((prevValue) => prevValue + 12)
  }

  // DOM element references
  const loadRef = useRef(null)
  const productsRef = useRef(null)

  useEffect(() => {
    if (paginate === data.length) {
      loadRef.current.classList.add('non-clickable')
    }
  }, [paginate])


  if (loading) {
    return <Loading />
  }

  return (
    <section className='content'>
      <ContentHeader />
      <div className='products-container' ref={productsRef}>
        {filterItems(data)
          .slice(0, paginate)
          .map((item) => (
            <article key={item.id} className={`${item.color} product-card`}>
              <div className='card-title'>
                <h4>{item.type}</h4>
                <h3>{item.name}</h3>
              </div>
              <img
                className='product-img'
                src={`images/${item.picture}`}
                alt={item.name}
                loading='lazy'
              />
              <div className='product-price'>
                <p>Price</p>
                <h3>${item.price}</h3>
              </div>
            </article>
          ))}
      </div>
      {productsRef.current?.children.length === 0 ? (
        <h2 className='no-results'>No results</h2>
      ) : (
        <button
          ref={loadRef}
          className='btn'
          onClick={(e) => loadData(e)}
        >
          Load More
        </button>
      )}
    </section>
  )
}

export default Content
