import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import DarkModeToggle from 'react-dark-mode-toggle'

const getThemeFromStorage = () => {
  let theme = false
  if (localStorage.getItem('theme')) {
    theme = JSON.parse(localStorage.getItem('theme'))
  }
  return theme
}

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(getThemeFromStorage())

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.className = 'light'
      document.body.style.backgroundColor = '#f4f4f4'
    } else {
      document.documentElement.className = 'dark'
      document.body.style.backgroundColor = '#222'
    }
    localStorage.setItem('theme', isDarkMode)
  }, [isDarkMode])

  return (
    <header>
      <Navbar
        bg='dark'
        className='navbar navbar-expand-lg navbar-dark'
        expand='lg'
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand className='mr-n4'>
            <Navbar.Brand>
              <LinkContainer to='/home'>
                <Nav.Link>
                  <h3 className='logo'>Hero Weather</h3>
                </Nav.Link>
              </LinkContainer>
            </Navbar.Brand>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse
            className='justify-content-end'
            id='basic-navbar-nav'
          >
            <Nav>
              <LinkContainer to='/home'>
                <Nav.Link>
                  <i className='fas fa-home'></i> Home{' '}
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/favorites'>
                <Nav.Link>
                  <i className='fas fa-star'></i> Favorites
                </Nav.Link>
              </LinkContainer>
            </Nav>
            <DarkModeToggle
              className='toggler'
              size={50}
              onChange={setIsDarkMode}
              checked={isDarkMode}
            />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
