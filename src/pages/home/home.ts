import { Component, Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
@Injectable()
export class HomePage {

  constructor(public navCtrl: NavController, 
    private storage: Storage,
    public events: Events ) {

  }
  setStorage(type)
  {
    this.storage.set('storage', type);
    alert("set "+type+" in storage");
    this.events.publish("session",type, Date.now());
  }

}
