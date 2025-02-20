import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
export class HeaderComponent {
  constructor(private router:Router, private sessionService: SessionService){}

  gotoLoginPage(){
    this.router.navigate(['/loginAcc']);
  }
  
  logOutPage() {
    this.sessionService.logoutSession();
    alert('account successfully logout')
  }


}

   
  