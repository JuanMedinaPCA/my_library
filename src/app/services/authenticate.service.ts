import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { stringify } from 'querystring';

  const correo = ''

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  
  constructor(private storage: Storage) { }

  
  loginUser(loginForm: any){
    
    var contraseña = localStorage.getItem("contraseñaRegistrada");
    var correo = localStorage.getItem("emailRegistrado");
   return new Promise((accept, reject)=>{
    if ( loginForm.email == correo && loginForm.password == atob(contraseña!))
        {
      accept("Login exitoso");
    } else {
      reject("Login fallido");
    }
  });
  }

 
}
