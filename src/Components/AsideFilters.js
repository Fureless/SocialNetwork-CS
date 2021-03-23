import React from 'react'
import {Badge, Container, Form, FormControl} from 'react-bootstrap'

const styles = {
  wrapper: {
    height: '35rem',
    backgroundColor: 'gray'
  },
  filterSettingsTitle: {
    textAlign: 'center',
    fontFamily: 'Work Sans',
    fontSize: '1.4rem',
    lineHeight: '1rem',
    paddingBottom: '2rem'
  },
  filterArea: {
    height: '5rem'
  },
  filterAreaName: {
    fontFamily: 'Lato',
    fontSize: '1.2rem',
    lineHeight: '2rem'
  }
}

function AsideFilters() {
  return (
    <div className='filter-wrapper'>
      <p style={styles.filterSettingsTitle}>Настройка фильтров</p>
      {/*<span style={styles.filterArea}>*/}
      {/*  <div style={styles.filterAreaName}>Администрирование</div>*/}
      {/*  <div style={styles.filterAreaName}>Аналитика</div>*/}
      {/*  <div style={styles.filterAreaName}>Бэкенд</div>*/}
      {/*  <div style={styles.filterAreaName}>Дизайн</div>*/}
      {/*  <div style={styles.filterAreaName}>Информационная безопасность</div>*/}
      {/*  <Badge pill variant='secondary' className='mt-2 mb-2'>Ещё</Badge>*/}
      {/*</span>*/}

      {/*<span>*/}
      {/*  <p>Требуемые навыки</p>*/}
      {/*  <Form>*/}
      {/*    <FormControl type="text" placeholder="Search" className="mr-sm-2" />*/}
      {/*  </Form>*/}
      {/*  <span>*/}
      {/*    <Badge pill variant='secondary' className='mt-2 mb-2 mr-2'>android</Badge>*/}
      {/*    <Badge pill variant='secondary' className='mt-2 mb-2 mr-2'>MVVM</Badge>*/}
      {/*    <Badge pill variant='secondary' className='mt-2 mb-2 mr-2'>CI/CD</Badge>*/}
      {/*    <Badge pill variant='secondary' className='mt-2 mb-2 mr-2'>C++</Badge>*/}
      {/*  </span>*/}
      {/*</span>*/}

      {/*<span>*/}
      {/*  <p>Выбранные навыки</p>*/}
      {/*  <Badge pill variant='warning'>Firebase</Badge>*/}
      {/*</span>*/}

      {/*<span>*/}
      {/*  <p>Заработная плата</p>*/}

      {/*</span>*/}
    </div>
  )
}

export default AsideFilters
