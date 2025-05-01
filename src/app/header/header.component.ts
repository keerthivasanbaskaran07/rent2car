import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, NgbDropdownModule, NgbModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router, public sessionService: SessionService){}
  ngOnInit(): void {
  }
  isLoggedIn: boolean = false;
  isNavbarCollapsed = true;

  gotoLoginPage(){
    
    this.router.navigate(['/loginAcc']);
    
    
  }
  
  logOutPage() {
    
    this.sessionService.logoutSession();
    alert('account successfully logout')
  }



}

   
  