import { useSelector, useDispatch } from 'react-redux'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import {
  USERNAME,
  EMAIL,
  STATUS,
  setSortField,
} from '../redux/reducers/database'

export default function SortRadioButtonsGroup() {

  const { sort } = useSelector(store => store.database)
  const dispatch = useDispatch()

  const handleChange = (event) => {
    dispatch(setSortField(event.target.value))
  }

  return (
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="Sorting"
        name="Sorting"
        value={sort.sortField}
        row
        onChange={handleChange}
      >
        <FormControlLabel
          value={USERNAME}
          control={<Radio />}
          label="Username"
        />
        <FormControlLabel value={EMAIL} control={<Radio />} label="E-mail" />
        <FormControlLabel value={STATUS} control={<Radio />} label="Status" />
      </RadioGroup>
    </FormControl>
  )
}
