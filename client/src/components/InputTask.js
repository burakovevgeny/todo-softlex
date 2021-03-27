import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
  content__input_task: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    marginBottom: '20px',
  },
  input_task__button: {
    marginBottom: '20px',
  },
}))

export default function InputTask() {
  const classes = useStyles()

  return (
    <>
      <form className={classes.content__input_task}>
        <TextField
          label="Username"
          variant="outlined"
          id="username"
          name="username"
          type="usernmae"
          autoComplete="username"
          required
        />
        <TextField
          label="E-mail"
          variant="outlined"
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
        <TextField label="Task" variant="outlined" required />
      </form>
      <Button
        variant="contained"
        color="primary"
        className={classes.input_task__button}
      >
        ADD TASK
      </Button>
    </>
  )
}
