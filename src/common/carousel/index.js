import React, { Component } from 'react'
import { connect } from 'react-redux'
import style from './style.less'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'

class Carousel extends Component {
  constructor(props) {
    super()
    this.state = {
    }
  }
  render() {
    return (
      <div className={style.carousel}>
        <section className={`swiper-container ${style.swiperContainer}`} ref={self => this.swiperID = self}>
          <div className="swiper-wrapper">
            {
              this.props.list.map((item, index) => (
                <img key={index} className={`${style.img} swiper-slide`} alt='img' src={item.picUrl}></img>
              ))
              }
          </div>
          {/* <div className={`${style.prev} swiper-button-prev`}></div>
          <div className={`${style.next} swiper-button-next`}></div> */}
          <div className={`swiper-pagination ${style.pagination}`} ref={self => this.paginateID = self}></div>
        </section>
      </div>
    )
  }
  componentDidMount() {
    new Swiper(this.swiperID, {
      pagination: {
        el: this.paginateID,
      },
      loop: true,
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
      autoplay:true,
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      }
    });
  }
}

const mapStateToProps = (state) => {
  return {
  }
}
const mapDispathToProps = (dispatch) => {
  return {
  }
}
export default connect(mapStateToProps, mapDispathToProps)(Carousel)