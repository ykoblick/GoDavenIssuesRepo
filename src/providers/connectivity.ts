import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import { Network } from 'ionic-native';
import { Platform } from 'ionic-angular';
//import 'rxjs/add/operator/map';


declare var Connection;

@Injectable()
export class Connectivity {

   onDevice: boolean;
 
  constructor(public platform: Platform){
    this.onDevice = this.platform.is('cordova');
  }
 
  isOnline(): boolean {
    if(this.onDevice && Network.connection){
      return Network.connection !== Connection.NONE;
    } else {
      return navigator.onLine; 
    }
  }
 
  isOffline(): boolean {
    if(this.onDevice && Network.connection){
      return Network.connection === Connection.NONE;
    } else {
      return !navigator.onLine;   
    }
  }

}
