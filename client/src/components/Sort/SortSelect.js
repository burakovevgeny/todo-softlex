import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  content__sortWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px'
  },
  content__formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}))

export default function SortSelect() {
  const classes = useStyles()
  const [value, setValue] = useState('')
  const [open, setOpen] = useState(false)

  const handleChange = (event) => {
    setValue(event.target.value)
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
          value={value}
          onChange={handleChange}
        >
          <MenuItem value={2}>desc</MenuItem>
          <MenuItem value={3}>asc</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
