import React, { FC } from 'react'
import { departmentCard } from './types'
import { Link } from 'react-router-dom'
import './DepartmentCard.scss'

const DepartmentCard: FC<departmentCard> = ({img, title, link, backgroundColor}) => {
  return(
    <div 
      className='department__card'
      style={{ backgroundColor }}
    >
      <Link to={link} className="p1">
        <h4 className='department__card__text'>{title}</h4>
        <img 
          src={img} 
          alt='department-icon' 
          className='department__card__pic'
        />
      </Link>
    </div>
  )
}

export default DepartmentCard