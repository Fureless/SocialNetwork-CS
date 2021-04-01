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
    height: '25rem',
    color: 'black',
    padding: '2rem'
  }
}

export function test() {
  return (
    <>
      <Container style={styles.container}>
        <h2 className='text-center'>Короче сайт типа в разработке, а это его временная страница</h2>
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
              <li><strong>Вакансии и резюме: </strong>Исправлен некорректный перенос на 2 отдельные части при большом
                масштабировании
              </li>
              <li><strong>Вакансии и резюме: </strong>Исправлена вертикальная линия (разделитель)</li>
              <li><strong>Вакансии: </strong>Циклы для вывода тегов и условий, теперь готовы работать с данными
                поступающих с бэка
              </li>
              <li><strong>Вакансии: </strong>Были написаны разные вакансии. Теперь происходит автоматическая генерация
                по шаблонам
              </li>
              <li><strong>Вакансии: </strong>Добавлены изображения компании</li>
            </ul>
            <Carousel.Caption>
              <h3><small>18.03.2021</small></h3>
            </Carousel.Caption>
          </Carousel.Item>


          <Carousel.Item style={styles.item}>
            <ul>
              <li><strong>Вакансии и резюме: </strong>Теперь при переполнении текста описания не появляется область
                прокрутки, а происходит обрезание текста
              </li>
              <li><strong>Вакансии и резюме: </strong>Поправил изменение пропорциональности контейнера (левая и правая
                часть от разделяющей линии)
              </li>
              <li><strong>Вакансии и резюме: </strong>Стилизована вертикальная линия (разделитель)</li>
              <li><strong>Вакансии: </strong>Сделаны кастомные маркеры у списка условий</li>
              <li><strong>Вакансии: </strong>Слегка поправлены отступы/шрифт</li>
            </ul>
            <Carousel.Caption>
              <h3><small>19.03.2021</small></h3>
            </Carousel.Caption>
          </Carousel.Item>


          <Carousel.Item style={styles.item}>
            <ul>
              <li><strong>Вакансии и резюме: </strong>Исправлен дублирующийся разделитель в Safari</li>
              <li><strong>Резюме: </strong>Резюме в целом сильно доработаны и теперь похожи на исходный дизайн</li>
              <li><strong>Резюме: </strong>Исправлено некорректное отображение резюме в Safari</li>
              <li><strong>Резюме: </strong>Резюме теперь разные</li>
              <li><strong>Общее: </strong>"Текст для вида, как будто что-то было сделано"</li>
            </ul>
            <Carousel.Caption>
              <h3><small>20.03.2021</small></h3>
            </Carousel.Caption>
          </Carousel.Item>


          <Carousel.Item style={styles.item}>
            <ul>
              <li><strong>Навигация: </strong>Убрано выпадающее меню "Создать вакансию" при наведении мыши на "Вакансии"
              </li>
              <li><strong>Навигация: </strong>Исправлена ошибка из-за ссылок, вложенных в ссылки</li>
              <li><strong>Навигация: </strong>Добавлено изображение профиля пользователя</li>
              <li><strong>Навигация: </strong>Изменены css стили</li>
              <li><strong>Общее: </strong>Изменена стилистика всех изображений</li>
              <li><strong>Общее: </strong>Была проделана работа над адаптацией сайта. Теперь его можно открывать на
                смартфонах
              </li>
              <li><strong>Вакансии и резюме: </strong>Упрощены функции рендера тегов и условий</li>
              <li><strong>Меню фильтров: </strong>Теперь перемещается вместе с прокруткой страницы. Сами фильтры скрыты
                до лучших времен
              </li>

            </ul>
            <Carousel.Caption>
              <h3><small>22.03.2021</small></h3>
            </Carousel.Caption>
          </Carousel.Item>


          <Carousel.Item style={styles.item}>
            <ul>
              <li><strong>Регистрация/Вход: </strong>Добавлено окно регистрации/входа, которое (!пока что) будет <br/>появляться при каждом входе на сайт или его обновлении</li>
            </ul>
            <Carousel.Caption>
              <h3><small>01.04.2021</small></h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <h3 className='text-center'><strong>История изменений<sup>*</sup></strong></h3>
        <div className='text-center font-italic font-weight-light'><sup>*</sup>Они были и до 17-го числа</div>
      </Container>
    </>
  )
}
