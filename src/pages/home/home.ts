import { Component } from '@angular/core';
import { NavController,NavParams,LoadingController, ToastController } from 'ionic-angular';
import { TwitterConnect } from '@ionic-native/twitter-connect';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public http : Http,public navCtrl: NavController,public loadingCtrl: LoadingController, private toastCtrl: ToastController) {

  }
  twitterAuth(){
  this.http.get('/auth/twitter').subscribe(response => {
    console.log('GET Response:', response);
});
  }
}
