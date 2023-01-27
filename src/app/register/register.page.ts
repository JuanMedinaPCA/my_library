import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';
import { AlertController } from '@ionic/angular';

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
    private authenticate: AuthenticateService,
    private alertController: AlertController) {
      
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

  registerUserDB(registerForm: any){
    console.log(registerForm)
    this.authenticate.registerUserDB(registerForm).then( res => {
      this.navCtrl.navigateForward("/login");
    }).catch(err =>{
      this.presentAlert("Opps", "Hubo un error al tratar de registrarte", err);
    })
  }

  async presentAlert(header: any, subHeader: any, message: any) {
    const alert = await this.alertController.create(
     {
      header: header,
      subHeader: subHeader,
      message: message,
      buttons: ['OK']
     }
    );
    await alert.present();
  }

  registerUserLocal(data: any){
    console.log(data);
    this.authenticate.registerUserLocal(data).then(() =>{
      this.navCtrl.navigateForward("/login");
    })
  }

listaTipoDeDocumento = [
  {
    display: "tarjeta de identidad",
    value: "ti"
  },
  {display: "cedula de ciudadania",
    value: "cc"
  },
  {display: "cedula de extranjeria",
  value: "ce"
  },
  {display: "pasaporte",
  value: "ps"
  },
  {display: "registro civil",
  value: "rc"
  }
]

listaDeCarreras = [
  {
    display: "Ingenieria de sistemas",
    value: "sistemas"
  },
  {
    display: "Ingeniera industrial",
    value: "industrial"
  },
  {
    display: "Contaduria publica",
    value: "contaduria"
  },
  {
    display: "Administracion de empresas",
    value: "administracion"
  }
]
}
