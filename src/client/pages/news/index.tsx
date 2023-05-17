import './newsPage.scss'
import React from 'react'
import Header from '~/client/components/pageHeader'
import { PathKey } from '~/client/components/pageHeader/types'
import { ClientRoutes } from '~/common/types/routes'
import { newsCard } from './types'
import {NewsCard} from '~/client/components/NewsCard'
import { Pagination } from '~/client/components/Pagination'

const limit = 9

const News: React.FC = () => {
  let news: newsCard[] = (new Array(100)).fill({
    img: 'data:image/jpeg;base64,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',
    title: 'Конопляный чай только в DSR!!!',
    description: 'конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля, конопля',
    date: '22.08.2022',
    slug: 'https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BD%D0%BE%D0%BF%D0%BB%D1%8F'
  })
  news = news.map((card, i) => ({...card, title: card.title + i}))

  const [offset, setOffset] = React.useState(0)

  return (
    <div className="client__main">
      <Header 
        header={'Новости'} 
        description={'Новости факультета, события, мероприятия и объявления'} 
        path={{
          [PathKey.NEWS]: ClientRoutes.news
        }}
      />
      <div className="news-container">
        {news.slice(offset, offset + 9).map(newsCard => (
          <NewsCard key={Math.random()} {...newsCard} />
        ))}
      </div>
      <Pagination offset={offset} setOffset={setOffset} limit={limit} total={news.length} />
    </div>
  )
}

export default News
