import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import SortRadioButtonsGroup from '../containers/SortRadioButtonsGroup'
import SortSelect from '../containers/SortSelect'

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
    </div>
  )
}
