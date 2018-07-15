import * as Types from './actionTypes'
import axios from 'axios'
export const searchFocus = () => ({
  type: Types.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: Types.SEARCH_BLUR
})

export const setList = (data) => ({
  type: Types.SET_LIST,
  data
})

export const getList = () => {
  return (dispatch) => {
    let data = []
    axios.get('/api/searchList.json').then(res => {
      data = res
      dispatch(setList(data))
    }).catch(err => {
      console.dir(err)
    })
  }
}