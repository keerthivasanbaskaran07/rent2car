import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OffersComponent } from './offers/offers.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rent2car';
  

  
}
