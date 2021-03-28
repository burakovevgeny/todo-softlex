import axios from 'axios'

const GET_DATABASE = 'database/GET_DATABASE'
const SET_PAGE = 'database/SET_PAGE'
const SET_SORT_DIRECTION = 'database/SET_SORT_DIRECTION'
const SET_SORT_FIELD = 'database/SET_SORT_FIELD'
export const ASCENDING = 'asc'
export const DESCENDING = 'desc'
export const DONE = 'done'
export const IN_PROGRESS = 'in progress'
export const EMAIL = 'email'
export const USERNAME = 'username'
export const STATUS = 'status'
const URL =
  'https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=BurakovEvgeny'
const CREATE_URL =
  'https://uxcandy.com/~shapoval/test-task-backend/v2/create?developer=BurakovEvgeny'

const initialState = {
  database: {
    tasks: [],
    totalTaskCount: 0,
    page: 0,
  },
  sort: {
    sortField: null,
    sortDirection: ASCENDING,
  },
  isLoading: true,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATABASE: {
      return {
        ...state,
        database: {
          tasks: action.payload.tasks,
          totalTaskCount: Math.ceil(
            Number(action.payload.total_task_count) / 3
          ),
          page: 1,
        },
        isLoading: false,
      }
    }
    case SET_PAGE: {
      return {
        ...state,
        database: {
          tasks: action.payload.tasks,
          totalTaskCount: Math.ceil(
            Number(action.payload.total_task_count) / 3
          ),
          page: action.page,
        },
      }
    }
    case SET_SORT_DIRECTION: {
      return {
        ...state,
        sort: {
          ...state.sort,
          sortDirection: action.payload,
        },
      }
    }
    case SET_SORT_FIELD: {
      return {
        ...state,
        sort: {
          ...state.sort,
          sortField: action.payload,
        },
      }
    }
    default:
      return state
  }
}

function setDatabase(database) {
  return { type: GET_DATABASE, payload: database }
}

function setPage(database, page) {
  return { type: SET_PAGE, payload: database, page }
}

export function setSortDirection(sortDirection) {
  return { type: SET_SORT_DIRECTION, payload: sortDirection }
}

export function setSortField(sortField) {
  return { type: SET_SORT_FIELD, payload: sortField }
}

export function getDatabase() {
  return (dispatch, getState) => {
    const store = getState()
    const { isLoading } = store.database
    if (isLoading) {
      axios(URL)
        .then(({ data }) => {
          dispatch(setDatabase(data.message))
        })
        .catch(() => console.log('Something is wrong with receiving data')) // eslint-disable-line no-console
    }
  }
}

export function getPage(page) {
  return (dispatch, getState) => {
    const store = getState()
    const { sort } = store.database
    axios(
      `${URL}&page=${page}&sort_field=${sort.sortField}&sort_direction=${sort.sortDirection}`
    )
      .then(({ data }) => {
        dispatch(setPage(data.message, page))
      })
      .catch(() => console.log('Something is wrong with receiving data')) // eslint-disable-line no-console
  }
}

export function addTask(username, email, task) {
  return () => {
    const FORM = new FormData()
    FORM.append('username', username)
    FORM.append('email', email)
    FORM.append('text', task)
    axios({
      method: 'post',
      url: CREATE_URL,
      data: FORM,
      headers: {
        'Content-type': 'multipart/form-data',
      },
    }).catch(() => console.log('Something is wrong with adding data')) // eslint-disable-line no-console
  }
}
