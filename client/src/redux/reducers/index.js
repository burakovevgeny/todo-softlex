import { combineReducers } from 'redux'
import database from './database'
import login from './login'
import task from './task'

const createRootReducer = () =>
  combineReducers({
    database,
    login,
    task,
  })

export default createRootReducer
