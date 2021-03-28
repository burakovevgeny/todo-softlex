import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'
import { getPage } from '../redux/reducers/database'

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

  const { database, sort } = useSelector((store) => store.database)

  const [page, setPage] = useState(1)
  const dispatch = useDispatch()

  const handleChange = (_, value) => {
    setPage(value)
  }

  useEffect(() => {
    dispatch(getPage(page))
  }, [dispatch, page, sort])

  return (
    <div className={classes.content__pagination}>
      <Pagination
        count={database.totalTaskCount}
        page={page}
        onChange={handleChange}
        showFirstButton
        showLastButton
      />
    </div>
  )
}
