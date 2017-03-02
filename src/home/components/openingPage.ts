import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'openingPage',
	template: require('./openingPage.html')
})

export class openingPage implements OnInit {
	classAnimate: boolean;

	constructor() {	}

	time() {
		setTimeout( () => {
			this.classAnimate = true;
		}, 1000)
	}

  ngOnInit() {
		this.time();
  }

}
