import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import { addTask, getPage } from '../redux/reducers/database'

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
  const [username, setUsername] = useState('')
  const { database } = useSelector((store) => store.database)
  const [email, setEmail] = useState('')
  const [task, setTask] = useState('')

  const classes = useStyles()
  const dispatch = useDispatch()

  const onAddClick = (event) => {
    event.preventDefault()
    dispatch(addTask(username, email, task))
    setUsername('')
    setEmail('')
    setTask('')
    dispatch(getPage(database.page))
  }

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
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <TextField
          label="E-mail"
          variant="outlined"
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          label="Task"
          variant="outlined"
          required
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />
      </form>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        onClick={onAddClick}
        className={classes.input_task__button}
      >
        ADD TASK
      </Button>
    </>
  )
}
