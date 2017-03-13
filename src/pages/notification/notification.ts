import { Component } from '@angular/core';

import { ImagePicker } from 'ionic-native';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html'
})
export class NotificationPage {

  constructor(public navCtrl: NavController) {

  }

  test(){
  	ImagePicker.getPictures({}).then((results) => {
  for (var i = 0; i < results.length; i++) {
      console.log('Image URI: ' + results[i]);
     }
    }, (err) => { 
    console.log('the err: ' + err);
    });  
  }


}







