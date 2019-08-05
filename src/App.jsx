import React from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import intiApp from './pages/intiPage/intiApp'
import componentsApp from './pages/componentApp/componentsApp'
import appPropTypes from './pages/propTypes/propTypes'
import clickEventApp from './pages/clickEvent/clickEvent'
import incrementApp from './pages/incrementApp/incrementApp'
import componentEventApp from './pages/componentEvents/componentEvents'
import inputUpdateStateApp from './pages/inputUpdateState/inputUpdateState'
import clearInputApp from './pages/clearInputApp/clearInputApp'
import deleteDataApp from './pages/deleteData/deleteData'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Welcome Reactjs</h2>
          <ul className="menuList">
            <li><Link to={'/'}>Inti App</Link></li>
            <li><Link to={'/componentsApp'}>Components App</Link></li>
            <li><Link to={'/appPropTypes'}>PropTypes App</Link></li>
            <li><Link to={'/clickEventApp'}>clickEvent App</Link></li>
            <li><Link to={'/incrementApp'}>increment App</Link></li>
            <li><Link to={'/componentEventApp'}>componentEvent App</Link></li>
            <li><Link to={'/inputUpdateStateApp'}>inputUpdateState App</Link></li>
            <li><Link to={'/clearInputApp'}>clearInput App</Link></li>
            <li><Link to={'/deleteDataApp'}>deleteData App</Link></li>
          </ul>
          <hr />
          <Switch>
            <Route exact path='/' component={intiApp} />
            <Route exact path='/componentsApp' component={componentsApp} />
            <Route exact path='/appPropTypes' component={appPropTypes} />
            <Route exact path='/clickEventApp' component={clickEventApp} />
            <Route exact path='/incrementApp' component={incrementApp} />
            <Route exact path='/componentEventApp' component={componentEventApp} />
            <Route exact path='/inputUpdateStateApp' component={inputUpdateStateApp} />
            <Route exact path='/clearInputApp' component={clearInputApp} />
            <Route exact path='/deleteDataApp' component={deleteDataApp} />
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App;
