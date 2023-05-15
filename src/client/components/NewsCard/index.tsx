import './NewsCard.scss'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { newsCard } from '~/client/pages/news/types'
import {Slug} from '@common/icons/Slug'

export const NewsCard: FC<newsCard> = ({img, title, description, date, slug}) => {
  return (
    <div className='news-card'>
      <img src={img} alt="картиночка" className='news-card__img'/>
      <h5 className="news-card__title">{title}</h5>
      <p className="news-card__desc">{description}</p>
      <div className="news-card_footer">
        <span className="news-card_footer__date">{date}</span>
        <a href={slug} target="_blank" rel="noreferrer">
          <Slug />
        </a>
      </div>
    </div>
  )
}
