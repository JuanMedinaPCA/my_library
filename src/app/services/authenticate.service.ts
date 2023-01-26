import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

  

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  
  constructor(private storage: Storage) { }

  
  loginUser(loginForm: any){
    const datos = this.datosDeRegistro();
   return new Promise((accept, reject)=>{
    
    datos.then(res =>{
      if (res.email == loginForm.email && atob(res.password) == loginForm.password){
        accept("Login exitoso");
  } else {
    reject("Login fallido");
  }
    })
  });
  }

  registerUser(userData: any){
    userData.password = btoa(userData.password);
    return this.storage.set("user", userData);
  }
 datosDeRegistro(){
  return this.storage.get("user");
}
}