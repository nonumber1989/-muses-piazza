import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ArtifactData } from '../../providers/artifact-data';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	artifacts: any[] = [];

	constructor(
		public navCtrl: NavController,
		public artifactData: ArtifactData
	) {}

	ionViewDidLoad() {
		this.artifactData.getArtifacts().subscribe((artifacts: any[]) => {
			this.artifacts = artifacts;
		});
	}
	
}
