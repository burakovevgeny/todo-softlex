import React from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'

export default function SortRadioButtonsGroup() {
  const [value, setValue] = React.useState('')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <FormControl
      component="fieldset"
    >
      <RadioGroup
        aria-label="Sorting"
        name="Sorting"
        value={value}
        row
        onChange={handleChange}
      >
        <FormControlLabel
          value="Username"
          control={<Radio />}
          label="Username"
        />
        <FormControlLabel value="E-mail" control={<Radio />} label="E-mail" />
        <FormControlLabel value="Status" control={<Radio />} label="Status" />
      </RadioGroup>
    </FormControl>
  )
}
