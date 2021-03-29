import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Typography from '@material-ui/core/Typography'
import {
  ASCENDING,
  DESCENDING,
  STATUS,
  DONE,
  IN_PROGRESS,
  setSortDirection,
} from '../redux/reducers/database'

const useStyles = makeStyles((theme) => ({
  content__sortWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
  },
  content__formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}))

export default function SortSelect() {
  const classes = useStyles()
  const { sort } = useSelector((store) => store.database)
  const dispatch = useDispatch(useDispatch)
  const [open, setOpen] = useState(false)

  const handleChange = (event) => {
    dispatch(setSortDirection(event.target.value))
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <div className={classes.content__sortWrapper}>
      <Typography>Choose a direction:</Typography>
      <FormControl className={classes.content__formControl}>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={sort.sortDirection}
          onChange={handleChange}
        >
          <MenuItem value={ASCENDING}>
            {sort.sortField === STATUS ? IN_PROGRESS : ASCENDING}
          </MenuItem>
          <MenuItem value={DESCENDING}>
            {sort.sortField === STATUS ? DONE : DESCENDING}
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
