import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;

  constructor(private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private authenticate: AuthenticateService) {

      this.registerForm = this.formBuilder.group({
        name: new FormControl(),
        last_name: new FormControl(),
        document_type: new FormControl(),
        document_number: new FormControl(),
        career: new FormControl(),
        email: new FormControl(),
        password: new FormControl()
      });
     }
 
  ngOnInit() {
  }

  goToLogin(){
    this.navCtrl.navigateBack("/login");
  }

  registerUser(register_form: any){
    console.log(register_form)
    this.authenticate.registerUser(register_form).then(() => {
      this.navCtrl.navigateForward("/login");
    });
  }
}
