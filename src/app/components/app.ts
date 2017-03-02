import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app',
  template: `
	<header class="menu-content">
    <div class="menu-wrapper">

      <!-- brand -->
      <h1>
        <a routerLink="/">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="64" height="64" viewBox="0 0 64 64"><defs><path id="a" d="M53.862 45.845h-5.65c-2.01 0-3.394-.18-4.913-1.116-1.407-.85-2.48-2.01-3.283-3.485-.402-.76-.47-2.233-.47-2.233v-7.436h3.26l-.066 6.41c0 2.522 2.056 4.576 4.624 4.576h6.52v3.283h-.022zm0 3.595h-6.52c-6.343 0-11.523-5.136-11.523-11.478v-6.41h3.304v7.44c0 .066.067 1.584.513 2.41.826 1.563 1.965 2.747 3.417 3.64 1.607.983 3.06 1.184 5.136 1.184h5.672v3.214zm-18.4-20.23c-1.073.2-2.234.29-3.44.31-1.183-.02-2.367-.11-3.44-.31 0-3.753.068-11.948.068-11.97 0-1.318.09-2.524.224-3.618.982.178 2.077.29 3.193.29 1.117-.022 2.21-.112 3.193-.29.134 1.094.224 2.278.224 3.617.022 0-.045 8.217-.023 11.97zm-3.216 2.187c-1.273 0-2.524-.112-3.663-.313v-1.496c1.14.2 2.39.313 3.663.313 1.116 0 2.188-.088 3.215-.245v1.496c-1.026.158-2.098.247-3.214.247zm-.157 4.913s-1.34-1.675-1.52-4.556c.56.045 1.14.067 1.72.067.402 0 .804-.02 1.184-.02-.045 2.68-1.385 4.51-1.385 4.51zm-3.93-7.146l-6.968-.022 7.056-10.764-.09 10.786zM16.66 49.44h-6.522v-3.193h5.672c2.077 0 3.506-.18 5.136-1.183 1.474-.894 2.59-2.1 3.417-3.64.446-.827.513-2.345.513-2.412v-7.436h3.305v6.41C28.16 44.303 23 49.44 16.66 49.44zm-6.522-6.9h6.52c2.57 0 4.623-2.054 4.623-4.578l-.066-6.41h3.26v7.44c0 .02-.066 1.472-.468 2.232-.804 1.496-1.876 2.635-3.283 3.483-1.54.938-2.925 1.117-4.913 1.117h-5.672V42.54zm21.95-37.337c.18.2 2.346 2.635 3.15 8.04-.983.178-2.054.29-3.15.29-1.093-.023-2.165-.112-3.147-.29.782-5.405 2.97-7.86 3.15-8.04zm3.798 13.175l6.9 10.764-6.945.022.046-10.786zM32 0C14.314 0 0 14.336 0 32s14.336 32 32 32 32-14.336 32-32S49.686 0 32 0z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><g clip-path="url(#b)"><defs><path id="c" d="M-136-51h1440v1969H-136z"/></defs><clipPath id="d"><use xlink:href="#c" overflow="visible"/></clipPath><path clip-path="url(#d)" fill="#FFF" d="M-5-5h74v74H-5z"/></g></svg>
        </a>
      </h1>

      <!-- menu -->
      <nav>
        <a routerLink="/"><p>Blog</p></a>
        <a routerLink="/page"><p>Projects</p></a>
        <a routerLink="/page"><p>Archive</p></a>
        <a routerLink="/page"><p>About</p></a>
      </nav>

      <div class="menu-mobile" [class.menu-opened]="classBool">
        <button class="open-menu" (click)="addClass()">
          <svg width="70" height="60" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#fff">
          <g>
            <path d="M 7,16l 18,0 C 25.552,16, 26,15.552, 26,15C 26,14.448, 25.552,14, 25,14l-18,0 C 6.448,14, 6,14.448, 6,15 C 6,15.552, 6.448,16, 7,16zM 7,10l 18,0 C 25.552,10, 26,9.552, 26,9C 26,8.448, 25.552,8, 25,8l-18,0 C 6.448,8, 6,8.448, 6,9 C 6,9.552, 6.448,10, 7,10zM 7,22l 18,0 c 0.552,0, 1-0.448, 1-1c0-0.552-0.448-1-1-1l-18,0 C 6.448,20, 6,20.448, 6,21 C 6,21.552, 6.448,22, 7,22z">
            </path>
          </g>
          </svg>
        </button>
        <button class="close-menu" (click)="removeClass()">
          <svg width="70" height="70" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#fff">
          <g>
            <path d="M 10.050,23.95c 0.39,0.39, 1.024,0.39, 1.414,0L 17,18.414l 5.536,5.536c 0.39,0.39, 1.024,0.39, 1.414,0 c 0.39-0.39, 0.39-1.024,0-1.414L 18.414,17l 5.536-5.536c 0.39-0.39, 0.39-1.024,0-1.414c-0.39-0.39-1.024-0.39-1.414,0 L 17,15.586L 11.464,10.050c-0.39-0.39-1.024-0.39-1.414,0c-0.39,0.39-0.39,1.024,0,1.414L 15.586,17l-5.536,5.536 C 9.66,22.926, 9.66,23.56, 10.050,23.95z">
            </path>
          </g>
          </svg>
        </button>
      </div>

    </div>
	</header>

	<main [class.fixed]="navIsFixed" [class.menu-opened]="classBool">
		<router-outlet></router-outlet>
	</main>

	<footer class="footer">
		<div class="footer-content">
			<p>© 2016 Created by Joyjet Digital Space Agency</p>
		</div>
	</footer>
  `
})

export class AppComponent {
  classBool: boolean = null;
  public navIsFixed: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  @HostListener("window:scroll", [])

  onWindowScroll() {
    let number = this.document.body.scrollTop;
    if (number > 720) {
      this.navIsFixed = true;
    } else {
      this.navIsFixed = false;
    }
  }

  addClass() {
    this.classBool = true;
  }

  removeClass() {
    this.classBool = false;
  }

}
