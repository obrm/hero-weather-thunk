import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

import Header from './components/Header'
import HomePage from './pages/HomePage'
import FavoritesPage from './pages/FavoritesPage'
import PageNotFound from './pages/PageNotFound'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <Row className='justify-content-md-center mt-5'>
            <Col md='auto'>
              <Switch>
                <Route path='/favorites' component={FavoritesPage} exact />
                <Route path='/home' component={HomePage} exact />
                <Route path='/' component={HomePage} exact />
                <Route path='/*' component={PageNotFound} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </Router>
    </>
  )
}

export default App
