import React from 'react'
import {Container, Carousel} from 'react-bootstrap'

const styles = {
  dark: {
    backgroundColor: 'gray'
  },
  container: {
    verticalAlign: 'middle',
    height: '60vh'
  },
  item: {
    height: '400px',
    color: 'black',
    padding: '2rem'
  }
}

export function test() {
  return (
  <>
    <Container style={styles.container}>
      <h1 className='text-center'>Test page</h1>
      <h2 className='text-center'>Короче сайт типа в разработке а это его временная тестовая страница</h2>
      <h3 className='text-center'>В принципе я могу писать сюда что было сделано/исправлено:</h3>
      <br/>
      <Carousel style={styles.dark}>


        <Carousel.Item style={styles.item}>
          <ul>
            <li><strong>Общее: </strong>Сайт был задеплоен на хостинге</li>
            <li><strong>Общее: </strong>Сss код был улучшен (вместо style применяется className)</li>
            <li><strong>Вакансии: </strong>Теги и условия заполняются из циклов, но пока из заранее заготовленных</li>
            <li><strong>Резюме: </strong>Создание резюме из тестовых данных</li>
          </ul>
          <Carousel.Caption>
            <h3><small>17.03.2021</small></h3>
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item style={styles.item}>
          <ul>
            <li><strong>Вакансии и резюме: </strong>Исправлен некорректный перенос на 2 отдельные части при большом масштабировании</li>
            <li><strong>Вакансии: </strong>Циклы для вывода тегов и условий, теперь готовы работать с данными поступающих с бэка</li>
            <li><strong>Вакансии: </strong>Были написаны разные вакансии. Теперь происходит автоматическая генерация по шаблонам. Можно увидеть что будет при переполнении окна описания - появляется область прокрутки</li>
            <li><strong>Вакансии: </strong>Добавлены изображения компании</li>
            <li><strong>Вакансии и резюме: </strong>Исправлена вертикальная линия (разделитель)</li>
          </ul>
          <Carousel.Caption>
            <h3><small>18.03.2021</small></h3>
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item style={styles.item}>
          <ul>
            <li><strong>Вакансии и резюме: </strong>Стилизована вертикальная линия (разделитель)</li>
            <li><strong>Вакансии и резюме: </strong>Теперь при переполнении текста описания не появляется область прокрутки, а происходит обрезание текста</li>
            <li><strong>Вакансии: </strong>Слегка поправлены отступы/шрифт</li>
            <li><strong>Вакансии и резюме: </strong>Вроде поправил изменение пропорциональности контейнера (левая и правая часть от разделяющей линии) при переполнении текста или при сильном масштабировании</li>
            <li><strong>Вакансии: </strong>Сделаны кастомные маркеры у списка условий</li>
          </ul>
          <Carousel.Caption>
            <h3><small>19.03.2021</small></h3>
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item style={styles.item}>
          <ul>
            <li><strong>Вакансии и резюме: </strong>Исправлен дублирующийся разделитель в Safari</li>
            <li><strong>Резюме: </strong>Резюме в целом сильно доработаны и теперь похожи на исходный дизайн</li>
            <li><strong>Резюме: </strong>Резюме теперь разные</li>
            <li><strong>Резюме: </strong>Исправлено некорректное отображение резюме в Safari</li>
            <li><strong>Общее: </strong>"Текст для вида, как будто что-то было сделано"</li>
          </ul>
          <Carousel.Caption>
            <h3><small>20.03.2021</small></h3>
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item style={styles.item}>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
          <Carousel.Caption>
            <h3><small>21.03.2021</small></h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  </>
  )
}
