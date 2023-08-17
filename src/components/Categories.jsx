import React from 'react'

export const Categories = ({value, onChangeCategory}) => {

  const categories = [
    'Все',
    'Мясные',
    'Вегетерианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ]

  return (
    <div className="categories">
    <ul>
      {categories.map((categoryName, index) => (
        <li key={index} 
        onClick={() => onChangeCategory(index)} 
        className={value ===index ? "active" : '' }>
          {categoryName}
        </li>
      ))}
    </ul>
  </div>
  )
}
