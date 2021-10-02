import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import PagesCalculadora from './calculadora'
import PagesOla from './ola'

export default function PagesRoot() {
  return (
    <Router>
      <Switch>
        <Route path='/calculadora'>
          <PagesCalculadora />
        </Route>
        <Route path='/ola'>
          <PagesOla />
        </Route>
        <Redirect from='/' to='/calculadora' />
      </Switch>
    </Router>
  )
}
