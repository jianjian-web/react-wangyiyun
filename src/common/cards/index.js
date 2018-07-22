import React, {Component} from 'react'
import style from './style.less'
import Card from './card/card'

class Cards extends Component{
  render () {
    return (
      <div className={style.wrapper}>
      {
        this.props.data.map(item => (
          <Card data={item} key={item.id} />
        ))
      }
      </div>
    )
  }
}

export default Cards