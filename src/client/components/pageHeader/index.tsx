import React from 'react'
import { PathKey, Props } from '@client/components/pageHeader/types'
import {HeaderArrow} from '@common/icons/HeaderArrow'
import './pageHeader.scss'
import { Link } from 'react-router-dom'
import { ClientRoutes } from '~/common/types/routes'
import { Home } from '~/common/icons/Home'

const PageHeader: React.FC<Props> = ({path, header, description}) => {

  return (
    <div className="news_header">
      <ul className="news_header_links">
        <li className="news_header_links__item">
          <Link to={`/${ClientRoutes.home}`}>
            <Home/>
          </Link>
        </li>
        {Object.keys(path).map((name: string, _, array) => {
          const pathsTillCur = array.slice(0, array.indexOf(name) + 1).reduce((a: string, v: string) => a + '/' + path[v as PathKey], '')
          return <li key={name} className="news_header_links__item">
            <HeaderArrow />
            <Link to={pathsTillCur}>
              <span>{name}</span>
            </Link>
          </li>
        })}
      </ul>
      <h1 className="news_header__title">{header}</h1>
      {description && <p className="news_header__desc">{description}</p>}
    </div>
  )
}

export default PageHeader
