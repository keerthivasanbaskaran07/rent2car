import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';
import { apiUrls } from '../constants/globalContants';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent implements OnInit {

  fname:string='';
  lname:string='';
  email:any;
  subject:any;
  message:any;

 constructor(private apiService: ApiService, private sessionService:SessionService,private router: Router ){

  
 }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  messageAcc(){
    let requestBody = {
      fname:this.fname,
      lname:this.lname,
      email:this.email,
      subject:this.subject,
      message:this.message,
    }
    this.apiService.createData(apiUrls.messageApi,requestBody).subscribe(
      () => {alert('successfully Message Sended..')},
      err=>(console.log(err))
    )

  }

}
