import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }

  loginUser(credentials: any){
    return new Promise((accept, reject)=>{
      if ( credentials.email == "juan@gmail.com" && credentials.password == "123456")
      {
        accept("Login exitoso");
      } else {
        reject("Logi fallido");
      }
    });
  }
}
