import React from 'react'
import {Link} from 'react-router-dom'
import style from './card.less'

const Card = (props) => {
  const data = props.data
  return (
    <div className={style.cardWrapper}>
    <Link to={`playlist/detail?id=${data.id}`}>
      <span href="/test" style={{background:`url(${data.picUrl}) no-repeat`}}> </span>
      <p>{data.name}</p>
    </Link>
    </div>
  )
}

export default Card