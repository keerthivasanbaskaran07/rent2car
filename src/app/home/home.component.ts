import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { OffersComponent } from '../offers/offers.component';
import { SubscriptionComponent } from '../subscription/subscription.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../services/modal/modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, NgbDropdownModule, ModalComponent, LoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  
  loanId : string = '';
  cssClass : string= 'btn btn-brand';
  cssInpt : string = 'form-control';
  btnCdn : boolean = false;
  

}
