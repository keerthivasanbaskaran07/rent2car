import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { ApiService } from '../services/api.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { apiUrls } from '../constants/globalContants';

@Component({
  selector: 'app-location-details',
  standalone: true,
  imports: [LocationDetailsComponent , ReactiveFormsModule],
  templateUrl: './location-details.component.html',
  styleUrl: './location-details.component.scss'
})
export class LocationDetailsComponent implements OnInit {

  LocationData : FormGroup = new FormGroup(
      {
        locationName1 : new FormControl(''),
        locationName2 : new FormControl(''),
        locationName3 : new FormControl(''),
        locationName4 : new FormControl(''),
        locationName5 : new FormControl('')
        
      }
    );

  constructor(private apiService: ApiService, private sessionService:SessionService){
      // this.sessionService.validateUserSession();
    }
  ngOnInit(): void {
    this.getLocationData();
  }

    getLocationData(){
      this.apiService.getData(apiUrls.LocationApi+"?lId="+this.sessionService.getLocationId()).subscribe(
        (responseData : any) => {
          this.setLocationData(responseData[0]);
           
        },
        err =>{console.log(err)}
      )

    }

    setLocationData(responseData : any){
      this.LocationData.get('locationName1')?.setValue(responseData.locationName1);
      this.LocationData.get('locationName2')?.setValue(responseData.locationName2);
      this.LocationData.get('locationName3')?.setValue(responseData.locationName3);
      this.LocationData.get('locationName4')?.setValue(responseData.locationName4);
      this.LocationData.get('locationName5')?.setValue(responseData.locationName5);
    }
  

}
