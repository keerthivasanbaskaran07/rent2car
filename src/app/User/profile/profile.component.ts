import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { ApiService } from '../../services/api.service';
import { apiUrls } from '../../constants/globalContants';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{
  
  profileData : FormGroup = new FormGroup(
    {
      name : new FormControl(''),
      userName : new FormControl(''),
      password : new FormControl(''),
      email : new FormControl(''),
      mobile : new FormControl(''),
      address : new FormControl('')
    }
  );


  constructor(private apiService: ApiService, private sessionService:SessionService){
    this.sessionService.validateUserSession();
  }

  ngOnInit(): void {
    this.getProfileData();
  }

  getProfileData(){

    this.apiService.getData(apiUrls.userApi+"/"+this.sessionService.getUserId()).subscribe(
      (responseData : any) => {
        this.setProfileData(responseData);
      },
      err => { console.log(err);}
    );
  }

  setProfileData(responseData:any){

    this.profileData.get('name')?.setValue(responseData.name);
    this.profileData.get('userName')?.setValue(responseData.userName);
    this.profileData.get('password')?.setValue(responseData.password);
    this.profileData.get('email')?.setValue(responseData.email);
    this.profileData.get('mobile')?.setValue(responseData.mobile);
    this.profileData.get('address')?.setValue(responseData.address);

  }

  updateProfile(){

    let requestBody = {
      name : this.profileData.get('name')?.value,
      userName : this.profileData.get('userName')?.value,
      password : this.profileData.get('password')?.value,
      email : this.profileData.get('email')?.value,
      mobile : this.profileData.get('mobile')?.value,
      address : this.profileData.get('address')?.value,
    }

    this.apiService.patchData(apiUrls.userApi, requestBody,this.sessionService.getUserId()).subscribe(
      ()=>{
        alert("Profile updated Successfully...");
      },
      err => {console.log(err);}
    );

  }

}
