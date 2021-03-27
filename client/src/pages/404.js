import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { useEffect, useState } from 'react'
import '../index.css'

const useStyles = makeStyles(() => ({
  not_found: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundImage:
      'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/257418/andy-holmes-698828-unsplash.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    minWidth: '100vw',
    color: 'rgba(255,255,255,.87)',
  },
}))

export default function NotFoundPage() {
  const classes = useStyles()
  const [count, setCount] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count < 404) {
        setCount(count + 1)
      } else setCount(404)
    }, 1)
    return () => clearInterval(intervalId)
  }, [count])

  return (
    <div className={classes.not_found}>
      <Typography variant="h1" color="initial">
        {count}
      </Typography>
      <Typography variant="h2">Page not found :(</Typography>
    </div>
  )
}
