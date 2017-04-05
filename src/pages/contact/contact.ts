import { Component, ViewChild, ElementRef } from '@angular/core';

import { NavController } from 'ionic-angular';

declare var Caman: any;

@Component({
	selector: 'page-contact',
	templateUrl: 'contact.html'
})
export class ContactPage {

	@ViewChild('mapCanvas') mapElement: ElementRef;
	constructor(public navCtrl: NavController) {}

	ionViewDidLoad() { 
		let theEle = this.mapElement.nativeElement;
		Caman('#map_canvas', function() {
			this.brightness(50).render();
		});
	}

}
