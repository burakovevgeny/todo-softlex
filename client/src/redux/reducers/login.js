import axios from 'axios'

const LOGIN = 'login/LOGIN'
const LOGOUT = 'login/LOGOUT'
const URL =
  'https://uxcandy.com/~shapoval/test-task-backend/v2/login/?developer=BurakovEvgeny'

const initialState = {
  token: null,
  username: null,
  password: null,
  auth: false,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        token: action.token,
        username: action.username,
        password: action.password,
        auth: true,
      }
    }
    case LOGOUT: {
      return {
        ...state,
        token: null,
        username: null,
        password: null,
        auth: false,
      }
    }
    default:
      return state
  }
}

function login(token, username, password) {
  return { type: LOGIN, token, username, password }
}

export function logout() {
  return { type: LOGOUT }
}

export function getLogin(username, password) {
  return (dispatch) => {
    const FORM = new FormData()
    FORM.append('username', username)
    FORM.append('password', password)
    axios({
      method: 'post',
      url: URL,
      data: FORM,
      headers: {
        'Content-type': 'multipart/form-data',
      },
    })
      .then(({ data }) => {
        dispatch(login(data.message.token, username, password))
      })
      .catch(() => console.log('Something is wrong with receiving login data')) // eslint-disable-line no-console
  }
}
