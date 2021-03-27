import { Switch, Route, BrowserRouter } from 'react-router-dom'
import MainContent from './pages/MainContent'
import NotFoundPage from './pages/404'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MainContent} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
)

export default App
