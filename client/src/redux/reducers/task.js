import axios from 'axios'

const GET_TASK = 'task/GET_TASK'
const EDIT_STATUS = 'task/EDIT_STATUS'

const initialState = {
  task: {
    id: null,
    username: null,
    email: null,
    text: '',
    status: null,
  },
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_TASK: {
      return {
        ...state,
        task: {
          id: action.id,
          username: action.username,
          email: action.email,
          text: action.text,
          status: action.status,
        },
      }
    }
    case EDIT_STATUS: {
      return {
        ...state,
        task: {
          ...state.task,
          status: action.status,
        },
      }
    }
    default:
      return state
  }
}

export function getEdit(id, username, email, text, status) {
  return { type: GET_TASK, id, username, email, text, status }
}

export function setStatus(status) {
  return { type: EDIT_STATUS, status }
}

export function editTask(id, status, text) {
  return (_, getState) => {
    const state = getState()
    const { token } = state.login
    const FORM = new FormData()
    FORM.append('token', token)
    FORM.append('text', text)
    FORM.append('status', status)
    axios({
      method: 'post',
      url: `https://uxcandy.com/~shapoval/test-task-backend/v2/edit/${id}/?developer=BurakovEvgeny`,
      data: FORM,
      headers: {
        'Content-type': 'multipart/form-data',
      },
    }).catch(() => console.log('Something is wrong with edit data')) // eslint-disable-line no-console
  }
}
