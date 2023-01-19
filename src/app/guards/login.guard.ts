import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
 constructor(private storage: Storage, private navCtrl: NavController) {}
 async canActivate(){
    const login = await this.storage.get("usuarioLogeado");
    if (login){
        return true;
    }else {
      this.navCtrl.navigateForward("/login");
      return false;
    }
  }
  
}
