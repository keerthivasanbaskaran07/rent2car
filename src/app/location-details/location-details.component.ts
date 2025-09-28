import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { ApiService } from '../services/api.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { apiUrls } from '../constants/globalContants';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-details',
  standalone: true,
  imports: [ReactiveFormsModule , CommonModule, FormsModule],
  templateUrl: './location-details.component.html',
  styleUrl: './location-details.component.scss'
})
export class LocationDetailsComponent implements OnInit {

  // loc1:string="";
  // loc2:string="";
  LocationData : FormGroup = new FormGroup(
      {
        lName : new FormControl(''),
        ImgLocation : new FormControl(''),
        locationName1 : new FormControl(''),
        locationName2 : new FormControl(''),
        locationName3 : new FormControl(''),
        locationName4 : new FormControl(''),
        locationName5 : new FormControl('')
        
      }
    );
 LocationDetails:any;
  lName:any;
  ImgLocation:any;
  locationName1:any;
  locationName2:any;
  locationName3:any;
  locationName4:any;
  locationName5:any;
location: any;
  constructor(private apiService: ApiService, private sessionService:SessionService,private router: Router ){
      // this.sessionService.validateUserSession();
    }
  ngOnInit(): void {
    this.getLocationData();
  }

    getLocationData(){
      this.apiService.getData(apiUrls.LocationApi+"?lId="+this.sessionService.getLocationId()).subscribe(
        (responseData : any) => {
           this.setLocationData(responseData[0]);
           this.LocationDetails=responseData;
        },
        err =>{console.log(err)}
      )

    }

    setLocationData(responseData : any){
      this.LocationData.get('lName')?.setValue(responseData.lName);
      this.LocationData.get('ImgLocation')?.setValue(responseData.ImgLocation);
      this.LocationData.get('locationName1')?.setValue(responseData.locationName1);
      this.LocationData.get('locationName2')?.setValue(responseData.locationName2);
      this.LocationData.get('locationName3')?.setValue(responseData.locationName3);
      this.LocationData.get('locationName4')?.setValue(responseData.locationName4);
      this.LocationData.get('locationName5')?.setValue(responseData.locationName5);
    }
    goToCarDetails(CId:string){
      this.sessionService.SetCarsSession(CId);
      this.router.navigate(['/carDts']);
	  }
  

}


