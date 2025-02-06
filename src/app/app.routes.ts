import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OffersComponent } from './offers/offers.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'loginAcc', component:LoginComponent},
    {path:'accOffers', component:OffersComponent},
    {path:'accSubscription', component:SubscriptionComponent},
    {path:'accHome',component:HomeComponent}
];
