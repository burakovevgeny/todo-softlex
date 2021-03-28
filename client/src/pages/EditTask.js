import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Header from '../containers/Header'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import { setStatus, editTask } from '../redux/reducers/task'
import { getPage } from '../redux/reducers/database'

const useStyles = makeStyles({
  task__wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minWidth: '50%',
    minHeight: '50vh',
  },
  margin: {
    margin: '20px',
  },
  task__buttons: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  content__formControl: {
    margin: '20px',
    minWidth: 120,
  },
})

export default function EditTask() {
  const classes = useStyles()
  const { task } = useSelector((store) => store.task)
  const { database } = useSelector((store) => store.database)
  const dispatch = useDispatch()
  const history = useHistory()

  const [text, setText] = useState(task.text)
  const [open, setOpen] = useState(false)

  const setChangeText = (event) => {
    setText(event.target.value)
  }

  const handleChange = (event) => {
    if (event.target.value === 'inprogress') {
      dispatch(setStatus(1))
    } else if (event.target.value === 'done') {
      dispatch(setStatus(11))
    }
  }

  const onClickEdit = (id, status) => {
    dispatch(editTask(id, status, text))
    history.push('/')
    dispatch(getPage(database.page))
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <>
      <Header />
      <Layout>
        <Card className={classes.task__wrapper}>
          <CardContent>
            <Typography
              variant="h4"
              component="h4"
              color="primary"
              className={classes.margin}
            >
              TASK ID: {task.id}
            </Typography>
            <Typography variant="h5" className={classes.margin}>
              username: {task.username}
            </Typography>
            <Typography variant="h5" className={classes.margin}>
              e-mail: {task.email}
            </Typography>
            <TextField
              label="Task"
              multiline
              rows={5}
              value={text}
              variant="outlined"
              className={classes.margin}
              onChange={setChangeText}
            />
            <FormControl className={classes.content__formControl}>
              <Select
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                onChange={handleChange}
                value={
                  task.status === 0 || task.status === 1 ? 'inprogress' : 'done'
                }
              >
                <MenuItem value="inprogress">in progress</MenuItem>
                <MenuItem value="done">done</MenuItem>
              </Select>
            </FormControl>
          </CardContent>
          <CardActions className={classes.task__buttons}>
            <Button
              color="secondary"
              onClick={() => onClickEdit(task.id, task.status, text)}
            >
              EDIT
            </Button>
            <Button color="primary" onClick={() => history.push('/')}>
              CANCEL
            </Button>
          </CardActions>
        </Card>
      </Layout>
      <Footer />
    </>
  )
}
