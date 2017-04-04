import { Component, Input  } from '@angular/core';

import { ImagePicker } from 'ionic-native';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html'
})
export class NotificationPage {

  @Input() imgs: string[];
  notification: string;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    this.notification = 'message';
  }

  swithNotification() {
    
  }

  test(){
  	ImagePicker.getPictures({}).then((results) => {
  for (var i = 0; i < results.length; i++) {
      console.log('Image URI: ' + results[i]);
     }
     this.imgs = results;
    }, (err) => { 
    console.log('the err: ' + err);
    });  
  }


}







