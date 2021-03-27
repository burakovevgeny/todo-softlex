import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import SortRadioButtonsGroup from './SortRadioButtonsGroup'
import SortSelect from './SortSelect'

const useStyles = makeStyles(() => ({
  content__sort_wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: '150px',
    width: '100%',
    marginBottom: '20px',
  },
}))

export default function SortWrapper() {
  const classes = useStyles()
  return (
    <div className={classes.content__sort_wrapper}>
      <Typography>Sort by:</Typography>
      <SortRadioButtonsGroup />
      <SortSelect />
      <Button variant="contained" color="secondary">
        SEARCH
      </Button>
    </div>
  )
}
