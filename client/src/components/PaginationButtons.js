import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'

const useStyles = makeStyles((theme) => ({
  content__pagination: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    marginTop: '10px',
  },
}))

export default function PaginationControlled() {
  const classes = useStyles()
  const [page, setPage] = React.useState(1)
  const handleChange = (event, value) => {
    setPage(value)
  }

  return (
    <div className={classes.content__pagination}>
      <Pagination
        count={3}
        page={page}
        onChange={handleChange}
        showLastButton
      />
    </div>
  )
}
