import React from 'react'
import style from './style.less'

const Title = (props) => (
  <div className={style.title}>
    <span className={style.text}>{props.title}</span>
    <span className={style.min}>{props.label}</span>
  </div>
)

export default Title