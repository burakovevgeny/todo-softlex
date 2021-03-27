import { withStyles, makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Checkbox from '@material-ui/core/Checkbox'
import { useEffect, useState } from 'react'

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

  const [database, setDatabase] = useState([])

  useEffect(() => {
    axios(
      'https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=Name'
    ).then(({ data }) => setDatabase(data.message.tasks))
  }, [])

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="todo table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Task</StyledTableCell>
            <StyledTableCell>Username</StyledTableCell>
            <StyledTableCell>E-mail</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody className={classes.test}>
          {database.map((item) => (
            <StyledTableRow key={item.id}>
              <StyledTableCell component="th" scope="row">
                {item.username}
              </StyledTableCell>
              <StyledTableCell>{item.email}</StyledTableCell>
              <StyledTableCell>{item.text}</StyledTableCell>
              <StyledTableCell>
                <Checkbox color="secondary" disabled checked />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
