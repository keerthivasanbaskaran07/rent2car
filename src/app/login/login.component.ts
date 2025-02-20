import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../services/api.service';
import { apiUrls } from '../constants/globalContants';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, NgbAlertModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  LoginForm: FormGroup;

  isSubmitted: boolean = false;

  errMsg: string = '';

  constructor(private router: Router, private userApi: ApiService, private sessionservice: SessionService) {
    this.LoginForm = new FormGroup(
      {
        UserName: new FormControl('', Validators.required),
        Password: new FormControl('', Validators.required)
      }
    );

  }

  gotoRegisterPage() {
    this.router.navigate(['/register']);
  }

  checkLogin() {
    
      this.errMsg = '';

      this.isSubmitted = true;

      // if (this.LoginForm.status == 'VALID') {
      //   let filter = "?UserName=" + this.LoginForm.get('UserName')?.value + "&Password=" + this.LoginForm.get('Password')?.value;

      //   this.userApi.getData(apiUrls.userApi + filter).subscribe(
      //     (responseData: any) => {
      //       if (responseData.length > 0) {
      //         alert("Login Successfull...");
      //         sessionStorage.setItem('User', this.LoginForm.get('UserName')?.value);
      //         sessionStorage.setItem('UserId', responseData[0].id);
      //         this.router.navigate(['/accAdmin']);
      //       } else {
      //         this.errMsg = 'Invalid Username or password.';
      //       }
      //     },
      //     err => {
      //       console.log(err);
      //       this.errMsg = 'An error occurred. Kindly try again later.';
      //     }
      //   );
      // }
      if(this.LoginForm.status == 'VALID'){
        let apiUrl = apiUrls.userApi + '?userName=' + this.LoginForm.get('UserName')?.value + '&password=' + this.LoginForm.get('Password')?.value;
        this.userApi.getData(apiUrl).subscribe(
          (responseData:any) => {
            console.log(responseData);
            if(responseData.length > 0){
              this.sessionservice.setUserSession(responseData[0]);
              // sessionStorage.setItem('UserId', responseData[0].id);
              // sessionStorage.setItem('UserName', responseData[0].userName);            
              // sessionStorage.setItem('UserType', responseData[0].userType);
              this.router.navigate(['/']);
            }else{
              this.errMsg = 'User doesnot exists / Password not matched..';
            }
          },
          err => { console.log(err); }
        );
      }
    

  }


}
