import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { getDatabase } from '../redux/reducers/database'
import { getEdit } from '../redux/reducers/task'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell)

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow)

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
})

export default function TodoTable() {
  const classes = useStyles()

  const { database } = useSelector((store) => store.database)
  const { token } = useSelector((store) => store.login)
  const history = useHistory()
  const dispatch = useDispatch()

  const onEditClick = (id, username, email, text, status) => {
    dispatch(getEdit(id, username, email, text, status))
    history.push(`/edit/${id}`)
  }

  useEffect(() => {
    dispatch(getDatabase())
  })

  function test(status) {
    if (status === 1 || status === 0) {
      return <Typography color="primary">in progress</Typography>
    }
    if (status === 10 || status === 11) {
      return <Typography color="secondary">done</Typography>
    }
    return null
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="todo table">
        <TableHead>
          <TableRow>
            <StyledTableCell width="20%">Task</StyledTableCell>
            <StyledTableCell width="20%">Username</StyledTableCell>
            <StyledTableCell width="20%">E-mail</StyledTableCell>
            <StyledTableCell width="20%">Status</StyledTableCell>
            {token ? (
              <StyledTableCell width="20%">Options</StyledTableCell>
            ) : null}
          </TableRow>
        </TableHead>
        <TableBody>
          {database.tasks.map((item) => (
            <StyledTableRow key={item.id}>
              <StyledTableCell component="th" scope="row">
                {item.text}
              </StyledTableCell>
              <StyledTableCell>{item.username}</StyledTableCell>
              <StyledTableCell>{item.email}</StyledTableCell>
              <StyledTableCell>{test(item.status)}</StyledTableCell>
              {token ? (
                <StyledTableCell
                  onClick={() =>
                    onEditClick(
                      item.id,
                      item.username,
                      item.email,
                      item.text,
                      item.status
                    )}
                >
                  <Button color="secondary">Edit</Button>
                </StyledTableCell>
              ) : null}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
