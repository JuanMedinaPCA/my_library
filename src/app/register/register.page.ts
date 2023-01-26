import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup; 

  validarCampos = {
    name:[
      {type: "required", message: "El nombre es obligatorio."}
    ],
    last_name:[
      {type: "required", message: "El apellido es obligatorio."}
    ],
    document_type:[
      {type: "required", message: "El tipo de documento es obligatorio."}
    ],
    document_number:[
      {type: "required", message: "El numero de documento obligatorio."}
    ],
    career:[
      {type: "required", message: "La carrera es obligatorio."}
    ],
    email:[
      {type: "required", message: "El email es obligatorio."},
          {type: "pattern", message: "Tu email no es valido."}
        ],
    password:[
      {type: "required", message: "La contraseña es obligatoria."}
    ]
  }
  constructor(private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private authenticate: AuthenticateService) {
      
      this.registerForm = this.formBuilder.group({
        name: new FormControl(
        "", 
        Validators.compose([Validators.required])
         ),
        last_name: new FormControl(
        "",
        Validators.compose([Validators.required])
         ),
        document_type: new FormControl(
        "",
        Validators.compose([Validators.required])
        ),
        document_number: new FormControl(
        "",
        Validators.compose([Validators.required])
        ),
        career: new FormControl(
        "",
        Validators.compose([Validators.required])
        ),
        email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ])
        ),
        password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
           Validators.minLength(5)
        ])
        )
      });
     }
 
  ngOnInit() {
  }

  goToLogin(){ 
    this.navCtrl.navigateBack("/login");
  }

  registerUser(data: any){
    console.log(data);
    this.authenticate.registerUser(data).then(() =>{
      this.navCtrl.navigateForward("/login");
    })
  }

  registrarUsuario(register_form: any){
    console.log(register_form)
    register_form.password = btoa(register_form.password);
    localStorage.setItem('emailRegistrado', (register_form.email));
    localStorage.setItem('contraseñaRegistrada',(register_form.password));
    this.navCtrl.navigateForward("/login");
}

listaTipoDeDocumento = [
  {
    display: "tarjeta de identidad"
  },
  {display: "cedula de ciudadania"
  },
  {display: "cedula de extranjeria"
  },
  {display: "pasaporte"}
]

listaDeCarreras = [
  {
    display: "Ingenieria de sistemas"
  },
  {
    display: "Ingeniera electronica"
  },
  {
    display: "Ingeniera mecatronica"
  },
  {
    display: "Ingenieria industrial"
  }
]
}
