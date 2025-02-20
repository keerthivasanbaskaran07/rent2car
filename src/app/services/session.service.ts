import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private router: Router) { }

  setUserSession(user:any){
    sessionStorage.setItem('UserId', user.id);
    sessionStorage.setItem('UserName', user.userName);            
    sessionStorage.setItem('UserType', user.userType);
  }

  validateUserSession(){
    let userId = sessionStorage.getItem('UserId') || '';
    if(userId == '')
    {
      alert("Session Expired .. Please login again....");
        this.router.navigate(['/login']);
    }
  }

  isSessionAvailable(){
    let userId = sessionStorage.getItem('UserId') || '';
    if(userId == '')
      return false;
    return true;
  }

  logoutSession(){
    sessionStorage.removeItem('UserId');
    sessionStorage.removeItem('UserName');
    sessionStorage.removeItem('UserType');
    setTimeout(()=>{
      this.router.navigate(['loginAcc']);
    }, 3000);
  }
}