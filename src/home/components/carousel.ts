import { Component, ViewChild }  from '@angular/core';
import {KSSwiperContainer, KSSwiperSlide} from 'angular2-swiper';

@Component({
	selector: 'carouselSection',
	template: require('./carousel.html')
})

export class carouselSection {

	@ViewChild(KSSwiperContainer) swiperContainer: KSSwiperContainer;

	example1SwipeOptions: any;

	constructor() {
		this.example1SwipeOptions = {
			pagination: '.swiper-pagination',
      paginationClickable: true,
      slidesPerView: 3,
      spaceBetween: 30,
      breakpoints: {
          768: {
              slidesPerView: 2,
              spaceBetween: 30
          },
          640: {
              slidesPerView: 1,
              spaceBetween: 10
          }
      }
		};
	}

	moveNext() {
		this.swiperContainer.swiper.slideNext();
	}

	movePrev() {
		this.swiperContainer.swiper.slidePrev();
	}

}
