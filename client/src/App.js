import { Switch, Route, BrowserRouter } from 'react-router-dom'
import MainPage from './pages/MainPage'
import NotFoundPage from './pages/404'
import SignIn from './pages/Auth'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/auth" component={SignIn} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
)

export default App
