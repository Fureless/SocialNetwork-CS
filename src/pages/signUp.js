import React from 'react'
import {Badge, Container, Form} from 'react-bootstrap'

export function signUp(props) {

  const testOccupations = ['Дизайн', 'Бэкенд', 'Фронтенд', 'Информационная безопасноть', 'Администрирование', 'Аналитика', 'Кадры', 'Контент', 'Маркетинг', 'Менеджмент', 'Офис', 'Поддержка', 'Приложения', 'Продажи', 'Разработка ПО', 'Телеком', 'Тестирование', 'Другое']
  const testTags = ['C++', 'CI/CD', 'Backend', 'Frontend', 'Content', 'JS', 'React', 'Go', 'C#', 'Java', 'SQL', 'android', 'MVVM', 'Firebase']

  const renderOccupations = testOccupations.map((item, index) => (
    <li key={index} className='occupations'><input type='checkbox' className='mt-2 mr-2'/>{item}</li>
  ))

  const renderTags = testTags.map((item, index) => (
    <li key={index} className='mr-2 d-inline'><Badge pill className='tags'>{item}</Badge></li>
  ))

  return (
    <Container>
      <div>Чем вы занимаетесь?</div>
      <ul>{renderOccupations}</ul>
      <Form>
        <Form.Check
          custom
          inline
          label="1"
          type='checkbox'
          id={`custom-inline-checkbox-1`}
        />
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Check this switch"
        />
        <Form.Check
          disabled
          type="switch"
          label="disabled switch"
          id="disabled-custom-switch"
        />
      </Form>
      <div style={{height: '50vh'}}/>

      <div>Расскажите о ваших навыках</div>
      <input type='text'/><br/>
      <ul>{renderTags}</ul>
      <hr/>
      <div>Выбранные навыки</div>
      <Badge pill variant='warning'>android</Badge>
      <Badge pill variant='warning'>Firebase</Badge>
      <div style={{height: '50vh'}}/>


      {/*<div>Добавьте фотографию</div>*/}
      {/*<Form>*/}
      {/*  <Form.Group>*/}
      {/*    <Form.File id="exampleFormControlFile1" label="Example file input" />*/}
      {/*  </Form.Group>*/}
      {/*</Form>*/}
      {/*<input type="file"/>*/}
      {/*<div style={{height: '50vh'}}/>*/}
    </Container>
  )
}
