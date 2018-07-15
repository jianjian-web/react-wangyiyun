import * as Types from './actionTypes'
const defaultData = {
  url: '/'
}

export default (state = defaultData, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch(action.type){
    case Types.URL:
      newState.url = action.data
      break
    default:
  }
  return newState
}