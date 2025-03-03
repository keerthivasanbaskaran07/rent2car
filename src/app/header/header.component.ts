import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, NgbDropdownModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router, private sessionService: SessionService){}
  ngOnInit(): void {
    this.checkSesion();
  }
  isLoggedIn: boolean = false;

  gotoLoginPage(){
    
    this.router.navigate(['/loginAcc']);
    
    
  }
  
  logOutPage() {
    
    this.sessionService.logoutSession();
    alert('account successfully logout')
  }

  checkSesion(){
    
    if(this.sessionService.isSessionAvailable()){
      this.isLoggedIn = true;
    }
    else{
      this.isLoggedIn = false; 

    }
    
    
  }


}

   
  