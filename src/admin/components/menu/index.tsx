import './menu.scss'
import { toggleMenuAction } from '@admin/ducks/reducer/app'
import { getMenuShown } from '@admin/ducks/selectors/app'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AdminRoutes } from '~/common/types/routes'

const Menu: React.FC = () => {
  const shown: boolean = useSelector(getMenuShown)
  const dispatch = useDispatch()

  const toggleMenu = () => {
    dispatch(toggleMenuAction())
  }

  if(shown) {
    return (
      <div className="side-menu">
        <Link to="/" className="p1">Расписание</Link>
        <Link to={`${AdminRoutes.departments}`} onClick={toggleMenu} className="p1" >Кафедры</Link>
        <Link to={`${AdminRoutes.employees}`} onClick={toggleMenu} className="p1">Сотрудники</Link>
        <Link to={`${AdminRoutes.directions}`} onClick={toggleMenu} className="p1">Направления</Link>
        <Link to={`${AdminRoutes.gallery}`} onClick={toggleMenu} className="p1">Галерея</Link>
        <Link to={`${AdminRoutes.faq}`} onClick={toggleMenu} className="p1">Вопрос декану</Link>
        <Link to={`${AdminRoutes.positions}`} onClick={toggleMenu} className="p1">Должности</Link>
        <Link to={`${AdminRoutes.news}`} onClick={toggleMenu} className="p1">Новости</Link>

      </div>
    )
  }
  return null
}

export default Menu
