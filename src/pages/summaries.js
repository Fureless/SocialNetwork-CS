import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import AsideFilters from '../Components/AsideFilters'
import Summary from '../Components/Summary'
import summariesStyles from '../assets/styles/vacancies-summaries.css'

export function summaries() {
  return (
    <>
      <Container fluid className='mr-auto'>
        <Row className='row-container'>
          <Col md='8'>
            <Summary title='Backend разработчик на GO'
                     name='Александр Логинов'
                     image='http://placekitten.com/120/120'
                     description='Практический опыт показывает, что консультация с профессионалами из IT напрямую зависит от всесторонне сбалансированных нововведений? Практический опыт показывает, что дальнейшее развитие различных форм развитие различных форм'
                     tags='Backend C++ CI/CD JS'
                     exp='3 года'
                     salary='130 000 р'
                     level='Senior'
            />
            <Summary title='IOS разработчик'
                     name='Коновалов Михаил'
                     image='http://placekitten.com/115/115'
                     description='Работаю за еду, готов работать удалленно, люблю сладких дамочек, которые готовы работать со сладким мальчиком, я очень красивый и всегда иду на контакт, но если вы буде...'
                     tags='IOS Mikhail GO'
                     exp='1 год'
                     salary='15 000 р'
                     level='Middle'
            />
            <Summary title='Ваня иди делай андроид'
                     name='Просто Ваня'
                     image='http://placekitten.com/110/110'
                     description='Не следует, однако, забывать о том, что новая модель организационной деятельности напрямую зависит от ключевых компонентов планируемого обновления. Разнообразный ваня'
                     tags='AndroidStudio Kotlin Java'
                     exp='2 недели'
                     salary='200 000 р'
                     level='что?'
            />
            <Summary title='Frontend разработчик'
                     name='Щербинин Денис'
                     image='http://placekitten.com/105/105'
                     description='Привет я Денис, я разработчик на GO. Backend-разработчик на GО. Я люблю GO. Особенно люблю GO to sleep'
                     tags='IOS Swift Apple'
                     exp='1 месяц'
                     salary='50 000р'
                     level='Intern'
            />
            <Summary title='Менеджер и ревьюер кода))0)'
                     name='Шевцов Артём'
                     image='http://placekitten.com/90/90'
                     description='Работка найдись, Миша кыш'
                     tags='Manager TimeManager'
                     exp='7 лет'
                     salary='Много'
                     level='Junior'
            />
          </Col>

          <Col md='3' className='filter-wrapper'>
            <AsideFilters />
          </Col>
        </Row>
      </Container>
    </>
  )
}
