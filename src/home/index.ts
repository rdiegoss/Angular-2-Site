import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { SharedModule } from 'src/shared';
import { homePage }        from './home.module';

// => Plugins
import { KSSwiperContainer, KSSwiperSlide } from 'angular2-swiper';

// => Sections
import { openingPage }     from './components/openingPage';
import { carouselSection } from './components/carousel';
import { aboutSection }    from './components/about';

const routes: Routes = [
  { path: '', component: homePage }
];

@NgModule({
  declarations: [
    homePage,
    carouselSection,
    aboutSection,
    KSSwiperContainer,
    KSSwiperSlide,
    openingPage
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})

export class HomeModule {}
