import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbScrollSpyModule } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../services/api.service';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';
import { apiUrls } from '../constants/globalContants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cars-details',
  standalone: true,
  imports: [NgbDropdownModule ,NgbScrollSpyModule, FormsModule,CommonModule],
  templateUrl: './cars-details.component.html',
  styleUrl: './cars-details.component.scss'
})
export class CarsDetailsComponent implements OnInit {
  carsDetailsData: any;

constructor(private apiService: ApiService, private sessionService:SessionService,private router: Router ){
  
}

gotoHome(){
    
  this.router.navigate(['/']);
  
  
}
  ngOnInit(): void {
    this.getLocationData();
  }


   getLocationData(){
        this.apiService.getData(apiUrls.carApi+"?cId="+this.sessionService.getCarsId()).subscribe(
          (responseData : any) => {
             this.carsDetailsData=responseData;
          },
          err =>{console.log(err)}
        )
  
      }
}
