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
responseData: any;

  constructor(private apiService: ApiService, private sessionSer:SessionService){
    this.sessionSer.validateUserSession();
  }

  ngOnInit(): void {
    this.getProfileData();
  }

  getProfileData(){

    this.apiService.getData(apiUrls.userApi+"/"+this.sessionSer.getUserId()).subscribe(
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

  updateProfile(responseData : any){
    this.profileData.get('name')?.patchValue(responseData.name);
    this.profileData.get('userName')?.patchValue(responseData.userName);
    this.profileData.get('password')?.patchValue(responseData.password);
    this.profileData.get('email')?.patchValue(responseData.email);
    this.profileData.get('mobile')?.patchValue(responseData.mobile);
    this.profileData.get('address')?.patchValue(responseData.address);


  }

}
