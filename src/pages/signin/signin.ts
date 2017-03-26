import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController } from 'ionic-angular';

import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';


@Component({
	selector: 'page-user',
	templateUrl: 'signin.html'
})
export class SigninPage {
	login: { username?: string, password?: string } = {};
	submitted = false;

	constructor(public navCtrl: NavController) { }

	onLogin(form: NgForm) {
		this.submitted = true;

		if (form.valid) {
			this.navCtrl.push(TabsPage);
		}
	}

	onSignup() {
		this.navCtrl.push(SignupPage);
	}
}
