import { useSelector } from 'react-redux'
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import MainPage from './pages/MainPage'
import NotFoundPage from './pages/404'
import SignIn from './pages/Auth'
import EditTask from './pages/EditTask'

function App() {
  const { auth } = useSelector((store) => store.login)
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/login" component={SignIn} />
        {auth ? (
          <Route path="/edit/:id" component={EditTask} />
        ) : (
          <Redirect to="/">
            <Route component={MainPage} />
          </Redirect>
        )}
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
