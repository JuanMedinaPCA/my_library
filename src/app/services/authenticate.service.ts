import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';

  

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  urlServer = "https://librarypca.fly.dev/";
  httpHeaders = { headers: new HttpHeaders({"Content-Type": "application/json"}) };
  
  constructor(private storage: Storage,
    private http: HttpClient
    ) { }

  
  loginUserLocal(loginForm: any){
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

  loginUserDB(loginForm: any){
    return new Promise((accept, reject) => {
      let params = {
        "user": loginForm
      }
      this.http.post(`${this.urlServer}login`,params, this.httpHeaders).subscribe((data: any) => {
        if (data.status == "OK"){
          accept(data);
        }else{
          reject(data.errors)
        }
      },(error) => {
        reject("Error al intentar iniciar sesion, verifique las credenciales")
      })
    })
    }
    

  registerUserLocal(userData: any){
    userData.password = btoa(userData.password);
    return this.storage.set("user", userData);
  }
 datosDeRegistro(){
  return this.storage.get("user");
}

registerUserDB(userData: any){
  let params = {
    "user": userData
  }
return new Promise((accept, reject) => {
  this.http.post(`${this.urlServer}signup`,params, this.httpHeaders).subscribe((data: any) => {
    if (data.status == "OK"){
      accept(data.msg);
    }else{
      reject(data.errors)
    }
  },(error) => {
    reject("Error al intentar registrarse")
  })
})
}
}