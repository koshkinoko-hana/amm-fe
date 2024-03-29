/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
import './footer.scss'
import { ClientRoutes } from '@common/types/routes'
import IconColor from '~/assets/IconColor.svg'
import IconBW from '~/assets/IconBw.svg'
import { Link } from 'react-router-dom'
import  { Phone, Twitter, Vk, Marker } from '~/common/icons'
const Footer: React.FC = () => {
  const d = new Date()
  return (
    <div className="footer">
      <div className='footer-box'>
        <div className="footer-container">
          <div className="links-container">
            <div className='logo-container'>
              <div className="icon-container">
                <img className='img1' src={IconBW} />
                <img className='img2' src={IconColor} />
              </div>
            </div>
            <div className='column'>
              <Link to={`/${ClientRoutes.deanFaq}`} className="p2">Вопрос декану</Link>
              <Link to={`/${ClientRoutes.contacts}`} className="p2">Контакты</Link>
            </div>
          </div>
          <div className='contacts-container'>
            <div className='column'>
              <div className='social-icons'>
                <Link to="https://vk.com/amm_vsu" className="p2"><Vk/></Link>
                <Link to="https://twitter.com/amm_vsu" className="p2"><Twitter/></Link>
              </div>
              <div className='item'>
                <Link to="/" className="p2">
                  <a href="tel:+74732208266" className='link'>
                    <span className='span-svg'> <Phone /> </span>
                    <span className='span-text'> +7 (473) 2-208-266 </span>
                  </a>
                </Link>
              </div>
              <div className='item'>
                <Link to="/" className="p2">
                  <a href="#" className='link'>
                    <span className='span-svg'><Marker /></span>
                    <span className='span-text'>г. Воронеж, Университетская пл. 1</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className='mobile-icon'>
            <img src={IconBW} />
          </div>
        </div>
        <div className="copyright-text p4">© Факультет ПММ, 2023</div>
      </div>
    </div>
  )
}

export default Footer
