import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { apiUrls } from '../../constants/globalContants';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgbAlertModule, NgbModule, RouterModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm : FormGroup;
  isFromSubmitted : boolean = false;
  isRegisterSuccess : boolean = false;

  constructor(private apiService: ApiService, private router:Router){

    this.registerForm = new FormGroup(
      {
        userName : new FormControl('', Validators.required),
        pswd : new FormControl('', [Validators.minLength(8), Validators.required]),
        cfPswd : new FormControl('', Validators.required),
        mobile : new FormControl('', [Validators.minLength(10)]),
        email : new FormControl('', Validators.email)
      }
    );
  }

  registerUser(){
    this.isFromSubmitted = true;

    if(this.validateRegForm() && this.registerForm.status == 'VALID'){

      console.log("Condition statisfied")
      let requestBody = {
        userName : this.registerForm.get('userName')?.value,
        password : this.registerForm.get('pswd')?.value,
        email : this.registerForm.get('email')?.value,
        mobile : this.registerForm.get('mobile')?.value,
        status : 'Pending Approval',
        userType : 'Customer',
      }

      this.apiService.createData(apiUrls.userApi, requestBody).subscribe(
        () => {
          
          alert("Sign in Successfully...");
          this.router.navigate(['/loginAcc']);
          
        },
        err => { console.log(err); }
      );
    }
    console.log(this.registerForm);
  }
  validateRegForm(){
    if(this.registerForm.get('pswd')?.value != this.registerForm.get('cfPswd')?.value){
      alert('Password and Confirm Password Doesnt match...');
      return false;
    }
    return true;
}
}