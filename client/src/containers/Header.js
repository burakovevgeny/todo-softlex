import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core'
import { logout } from '../redux/reducers/login'

const useStyles = makeStyles(() => ({
  header: {
    flexGrow: 1,
    flex: '0 0 auto',
    width: '100%',
    maxHeight: '64px',
  },
  header__title: {
    flexGrow: 1,
    cursor: 'pointer',
  },
}))

export default function Header() {
  const classes = useStyles()
  const { auth } = useSelector((store) => store.login)
  const dispatch = useDispatch()
  const history = useHistory()

  return (
    <div className={classes.header}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.header__title}>
            <NavLink exact to="/">
              SOFTLEX
            </NavLink>
          </Typography>
          {auth ? (
            <Button
              variant="contained"
              color="secondary"
              onClick={() => dispatch(logout())}
            >
              LOGOUT
            </Button>
          ) : (
            <Button
              variant="contained"
              color="secondary"
              onClick={() => history.push('/login')}
            >
              LOGIN
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}
