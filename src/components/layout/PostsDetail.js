import React, { Component } from 'react'

export default class PostsDetail extends Component {
  render() {
    return (
      <div className="App">
          <div class="blog-slider">
  <div class="blog-slider__wrp swiper-wrapper">
    <div class="blog-slider__item swiper-slide">
      <div class="blog-slider__img">        
        <img src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg" alt=""/>
      </div>
      <div class="blog-slider__content">
        <div class="blog-slider__title">{this.props.title}</div>
        <div class="blog-slider__text">{this.props.content}</div>
      </div>
    </div>
    
  </div>
  <div class="blog-slider__pagination"></div>
</div>
      </div>
    )
  }
}
