import * as Types from './actionTypes'
const defaultData = {
  focused: false,
  list: []
}

export default (state = defaultData, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch(action.type){
    case Types.SEARCH_FOCUS:
      newState.focused = true
      break
    case Types.SEARCH_BLUR:
      newState.focused = false
      break
    case Types.SET_LIST:
      newState.list = action.data
      break
    default:
  }
  return newState
}