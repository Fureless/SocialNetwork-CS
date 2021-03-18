import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import AsideFilters from '../Components/AsideFilters'
import Vacancy from '../Components/Vacancy'
import vacanciesStyles from '../assets/styles/vacancies-summaries.css'

export function vacancies() {
  return (
  <>
    <Container fluid className='mr-auto'>
      <Row className='row-container'>
        <Col md='8'>
          <Vacancy title='IOS разработчик'
                   salary='10 000 - 20 000 руб'
                   description='Ищем разработчика в основную команду. Все требования кандидатам в личку, если у вас нет реального опыта работы, то пропускайте'
                   tags='IOS CI/CD C++ Backend JS'
                   image='http://placekitten.com/200/200'
                   company='Apple'
                   conditions='Опыт работы от 3-х лет/Работа в офисе/Квадратики по бокам что-ли/Типа того?'
          />
          <Vacancy title='Frontend разработчик'
                   salary='75 000 руб'
                   description='Практический опыт показывает, что консультация с профессионалами из IT напрямую зависит от всесторонне сбалансированных нововведений? Практический опыт показывает, что дальнейшее развитие различных форм деятельности способствует повышению актуальности модели развития. Разнообразный и богатый опыт повышение уровня гражданского сознания позволяет оценить значение системы обучения кадров, соответствующей насущным потребностям. Таким образом, сложившаяся структура организации требует определения и уточнения дальнейших направлений развития проекта.'
                   tags='JS Webpack Bootstrap React Redux'
                   image='http://placekitten.com/150/150'
                   company='NVIDIA'
                   conditions='Опыт работы от 1-го года/Предоставление существующих проектов/Работа удаленно'
          />
          <Vacancy title='Менеджер и ревьюер кода))0)'
                   salary='190 000 - 210 000 руб'
                   description='Задача организации, в особенности же сложившаяся структура организации способствует подготовке и реализации новых...'
                   tags='Manager TimeManager'
                   image='http://placekitten.com/125/125'
                   company='Yamaha'
                   conditions='Миша/Миша когда мердж/Миша хочу мердж'
          />
          <Vacancy title='Backend разработчик на GO'
                   salary='75 000 - 100 000 руб'
                   description='Не следует, однако, забывать о том, что новая модель организационной деятельности напрямую зависит от ключевых компонентов планируемого обновления. Разнообразный и богатый опыт социально-экономическое развитие позволяет оценить значение соответствующих условий активизации. Задача организации, в особенности же новая модель организационной деятельности в значительной степени обуславливает создание позиций, занимаемых участниками в отношении поставленных задач.'
                   tags='Go Google Youtube Backend'
                   image='http://placekitten.com/100/100'
                   company='Microsoft'
                   conditions='Тебя зовут Денис/Ты должен учиться в политехе/Сейчас ты читаешь эту фразу'
          />
          <Vacancy title='Ваня иди делай андроид'
                   salary='150 000 руб'
                   description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis eum fugit ipsum itaque, nobis obcaecati optio suscipit? A aperiam aspernatur, cum dolore fugiat, illum inventore natus nihil praesentium quod recusandae rem rerum unde. Dignissimos fugit ipsa omnis, quidem voluptatem voluptates.'
                   tags='Android Polytech Application'
                   image='http://placekitten.com/75/75'
                   company='Санкт-Петербургский политехнический универститет'
                   conditions='ЕГЭ от 270 баллов/Без опыта работы'
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
