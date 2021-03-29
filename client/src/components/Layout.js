import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles(() => ({
  content: {
    width: '100%',
    maxWidth: '1600px',
    flex: '1 0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: '25px',
  },
  content__wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    margin: '10px',
    padding: '10px',
    minHeight: '100%',
  },
}))

export default function Layout({ children }) {
  const classes = useStyles()
  return (
    <div className={classes.content}>
      <div className={classes.content__wrapper}>{children}</div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
