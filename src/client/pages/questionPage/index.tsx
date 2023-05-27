import ReactPaginate from 'react-paginate'
import React from 'react'
import { PaginateRight } from '~/common/icons/PaginateRight'
import { PaginateLeft } from '~/common/icons/PaginateLeft'
import { ClientRoutes } from '~/common/types/routes'
import { PathKey } from '~/client/components/pageHeader/types'
import Header from '~/client/components/pageHeader'
import Accordion from '~/common/components/Accordion/Accordion'
import ContactForm from './components/ContactForm'
import './quesionPage.scss'
/* eslint-disable quotes */
const QuestionPage: React.FC = () => {
  const accordionData = [
    { 
      title: 'У вас есть специальность программист? Или где можно выучится на программиста?', 
      content: 'На нашем факультет ведется обучение по направлениям, на которых готовят специалистов математико-информационного профиля, в том числе и программистов. В частности, на направлениях "Математическое обеспечение и администрирование информационных систем" и "Фундаментальные информатика и информационные технологии".'
    },
    { 
      title: 'Есть ли на Вашем факультете заочная форма обучения?', 
      content: 'Ответ на вопрос 2'
    },
    { 
      title: 'На "бизнес-информатике" вступительные эказмены ЕГЭ остались те же самые (математика, обществознание, русский язык)?', 
      content: 'На нашем факультет ведется обучение по направлениям, на которых готовят специалистов математико-информационного профиля, в том числе и программистов. В частности, на направлениях "Математическое обеспечение и администрирование информационных систем" и "Фундаментальные информатика и информационные технологии".'
    },
    { 
      title: 'Когда в 2014 году состоится день открытых дверей на Вашем факультете?', 
      content: 'Ответ на вопрос 2'
    },
    { 
      title: 'У вас есть специальность программист? Или где можно выучится на программиста?', 
      content: 'На нашем факультет ведется обучение по направлениям, на которых готовят специалистов математико-информационного профиля, в том числе и программистов. В частности, на направлениях "Математическое обеспечение и администрирование информационных систем" и "Фундаментальные информатика и информационные технологии".'
    },
    { 
      title: 'Есть ли на Вашем факультете заочная форма обучения?', 
      content: 'Ответ на вопрос 2'
    },
    { 
      title: 'На "бизнес-информатике" вступительные эказмены ЕГЭ остались те же самые (математика, обществознание, русский язык)?', 
      content: 'На нашем факультет ведется обучение по направлениям, на которых готовят специалистов математико-информационного профиля, в том числе и программистов. В частности, на направлениях "Математическое обеспечение и администрирование информационных систем" и "Фундаментальные информатика и информационные технологии".'
    },
    { 
      title: 'Когда в 2014 году состоится день открытых дверей на Вашем факультете?', 
      content: 'Ответ на вопрос 2'
    },
    { 
      title: 'В следующем году готовлюсь поступать на "бизнес-информатику". Планируется ли создание бюджетных мест? И хотелось бы узнать проходные баллы на коммерческое отделение и стоимость обучения за год.', 
      content: 'На нашем факультет ведется обучение по направлениям, на которых готовят специалистов математико-информационного профиля, в том числе и программистов. В частности, на направлениях "Математическое обеспечение и администрирование информационных систем" и "Фундаментальные информатика и информационные технологии".'
    }
  ]
  const [offset, setOffset] = React.useState(0)
  const [perPage, setPerPage] = React.useState(5)
  
  return (
    <div className='body'>
      <Header 
        header={'Вопрос декану'} 
        description={'Здесь вы можете напрямую задать вопрос декану факультета ПММ проф. Шашкину Александру Ивановичу и через некоторое время получить на него ответ. <br> Ваш вопрос, в зависимости от сложности и загруженности декана, может рассматриваться сроком до 2х недель'} 
        path={{
          [PathKey.FAQ]: ClientRoutes.deanFaq
        }}
      />
      <section  className='FAQ'>
        <div className='FAQ__container'>
          <h2>Часто задаваемые вопросы</h2>        
          {accordionData.slice(offset, offset + perPage).map((item, index) => (
            <Accordion
              key={index}
              title={item.title}
              titleClass='FAQ__item__title'
              arrowOpenClass='open'
            >
              <div style={{ padding: '20px 30px' }}>{item.content} </div>
            </Accordion>
          ))}

          <div className='FAQ__paginator'>
            <ReactPaginate 
              containerClassName='FAQ__list' 
              pageClassName='FAQ__list__item' 
              pageLinkClassName='FAQ__list__item__link'
              previousClassName='FAQ__list__arrow_left'
              nextClassName='FAQ__list__arrow_right'
              nextLabel={<PaginateRight />}
              previousLabel={<PaginateLeft />}
              breakClassName='FAQ__list__break'
              breakLinkClassName='FAQ__list__break__link'
              breakLabel="..."
              pageCount={Math.ceil(accordionData.length / perPage)}
              forcePage={1}
              onPageChange={({ selected }) => { setOffset(Math.ceil(selected * perPage)) }}
            />
          </div>
        </div>
      </section>
      <section className='ask-a-question'>
        <div className='ask-a-question__container'>
          <h2>Задать вопрос</h2>
          <ContactForm />
        </div>
      </section>
    </div>
  )
}

export default QuestionPage