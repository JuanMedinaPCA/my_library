import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;

  constructor(private navCtrl: NavController,
    private formBuilder: FormBuilder) {

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
  }
}
