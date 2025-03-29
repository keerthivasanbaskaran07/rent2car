import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OffersComponent } from './offers/offers.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './User/logout/logout.component';
import { RegisterComponent } from './User/register/register.component';
import { AcconutAdminComponent } from './Account/acconut-admin/acconut-admin.component';
import { CloseAccountComponent } from './Account/close-account/close-account.component';
import { CreateAccountComponent } from './Account/create-account/create-account.component';
import { ViewAccountComponent } from './Account/view-account/view-account.component';
import { ProfileComponent } from './User/profile/profile.component';
import { ForgetPswdComponent } from './User/forget-pswd/forget-pswd.component';
import { Component } from '@angular/core';
import { DatepickerComponent } from './services/datepicker/datepicker.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { CarsDetailsComponent } from './cars-details/cars-details.component';

export const routes: Routes = [
    {path:'loginAcc', component:LoginComponent},
    {path:'accOffers', component:OffersComponent},
    {path:'accSubscription', component:SubscriptionComponent},
    {path:'',component:HomeComponent},
    {path:'logout', component:LogoutComponent},
    {path:'register', component:RegisterComponent},
    {path:'accAdmin', component:AcconutAdminComponent},
    {path:'closeAcc', component:CloseAccountComponent},
    {path:'createAcc', component:CreateAccountComponent},
    {path:'viewAcc', component:ViewAccountComponent},
    {path:'profile', component:ProfileComponent},
    {path:'forgetpswd', component:ForgetPswdComponent},
    {path: 'datapic', component:DatepickerComponent},
    {path: 'locationDts', component:LocationDetailsComponent},
    {path: 'carsDts', component:CarsDetailsComponent}
    
];
