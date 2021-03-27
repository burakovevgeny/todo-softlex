import GitHubIcon from '@material-ui/icons/GitHub'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  footer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '0 0 auto',
    width: '100%',
  },
  footer__hr: {
    margin: '0',
    width: '80%',
  },
  footer__icon: {
    margin: '10px',
  },
}))

const URL = 'https://github.com/burakovevgeny/todo-softlex'

export default function Footer() {
  const classes = useStyles()
  return (
    <div className={classes.footer}>
      <hr className={classes.footer__hr} />
      <a href={URL}>
        <GitHubIcon className={classes.footer__icon} color="primary" />
      </a>
    </div>
  )
}
