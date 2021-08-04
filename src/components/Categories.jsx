import React from 'react'

import '../assets/styles/components/Categories.scss'

const Categories = (props) => {
  const { children, title } = props;
  
  return (
    <div className="categories">
      <h2 className="categories__title">{title}</h2>
      {children}
    </div>
  )
}


export default Categories;