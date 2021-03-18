import React, {useState} from 'react'
import {Navbar, Nav, Button, Modal, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import navStyle from '../assets/styles/navigation.css'

const styles = {
  header: {
    background: '#1A1A1A',
    marginBottom: '3rem'
  },
  headerLogo: {
    color: '#FFFFFF',
    fontSize: '2.5rem',
    fontFamily: 'Work Sans, sans-serif',
    fontWeight: 600,
    lineHeight: '2.5rem'
  },
  navLink: {
    color: '#C5C5C5',
    textDecoration: 'none',
    fontFamily: 'Lato, sans-serif',
    fontWeight: 300,
    fontSize: '1.3rem',
    lineHeight: '2rem',
  }
}

function Navigation() {
//TODO Пофиксить ошибку при нажатии
  const [showVac, setShowVac] = useState(false)
  const handleVacClose = () => setShowVac(false)
  const handleVacShow = () => setShowVac(true)

  return (
    <>
      {/*TODO  Сделать подсвечивание активной ссылки*/}
      <Navbar expand='md' variant='dark' sticky='top' style={styles.header}>
        <Navbar.Brand href='/' style={styles.headerLogo}>Network</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            {/*TODO Fix <a> -> <a>*/}
            <Nav.Link><Link to='/messages' style={styles.navLink}>Сообщения</Link></Nav.Link>
            <Nav.Link><Link to='/summaries' style={styles.navLink}>Резюме</Link></Nav.Link>
            <Nav.Link><Link to='/vacancies' style={styles.navLink}>
              <div className="dropdown">
                <span className="dropNav">Вакансии</span>
                <div className="dropdown-content">
                  <a onClick={handleVacShow} href="#">Create new</a>
                </div>
              </div>
            </Link></Nav.Link>
            <Nav.Link><Link to='/company' style={styles.navLink}>Компания</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/*TODO Сделать проверку введенных полей*/}
      <Modal show={showVac} onHide={handleVacClose} backdrop='static'>
        <Modal.Header closeButton>
          <Modal.Title>Vacancy creating...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId='formBasicVacancyTitle'>
              <Form.Label>Vacancy Title</Form.Label>
              <Form.Control type='title' placeholder='Enter vacancy title'/>
            </Form.Group>
            <Form.Group controlId='formBasicSalary'>
              <Form.Label>Salary</Form.Label>
              <Form.Control type='salary' placeholder='Enter salary' />
              <Form.Text className='text-muted'>We'll never share your email with anyone else.</Form.Text>
            </Form.Group>
            <Form.Group controlId='formBasicVacancyDescription'>
              <Form.Label>Description</Form.Label>
              <Form.Control type='description' placeholder='Enter description about vacancy' />
            </Form.Group>
            <Form.Group controlId='formBasicVacancyTags'>
              <Form.Label>Choose tags</Form.Label>
              <Form.Control type='tags' placeholder='Start typing...' />
            </Form.Group>
            <Form.Group controlId='formBasicVacancyConditions'>
              <Form.Label>Write your conditions</Form.Label>
              <Form.Control type='condition' placeholder='Start typing...' />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/*TODO Кнопка недоступна пока все поля не введены корректно*/}
          <Button variant='dark'>Send</Button>
          {/*TODO Пользователь отправляет введенные данные в Vacancy.js и там рендерится новая вакансия*/}
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Navigation
