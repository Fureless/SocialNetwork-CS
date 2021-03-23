import React from 'react'
import {Navbar, Nav, Figure, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import navigationStyles from '../assets/styles/navigation.css'

function Navigation() {
  return (
    <>
      <Navbar expand='md' variant='dark' sticky='top' className='header'>
        <Navbar.Brand href='/' className='header-logo'>Network</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
        <Navbar.Collapse className='justify-content-end' id='responsive-navbar-nav'>
          <Nav>
            <Link to='/messages' className='nav-link'>Сообщения</Link>
            <Link to='/summaries' className='nav-link'>Резюме</Link>
            <Link to='/vacancies' className='nav-link'>Вакансии</Link>
            <Link to='/company' className='nav-link'>Компания</Link>
            <Link to='/profile'>
              <Figure.Image
                width={48}
                height={48}
                alt='48x48'
                src='http://placekitten.com/120/120'
                roundedCircle
                className='circle mb-0 ml-3'
              />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Navigation
