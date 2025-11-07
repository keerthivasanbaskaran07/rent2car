import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object   // ✅ Added
  ) {}

  public isUserLoggedIn: boolean = false;
  private secretKey = 'My@Super$SecretKey2025!';

  // ✅ Utility to check if running in browser
  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  // ✅ Updated to be SSR-safe
  setUserSession(user: any) {
    if (!this.isBrowser()) return; // prevent Node access

    const userIdString = user.id.toString();
    const salt = Date.now().toString() + Math.random().toString(36).substring(2, 8);
    const encryptedId = CryptoJS.AES.encrypt(userIdString, this.secretKey + salt).toString();
    const encryptedSessionId = `${salt}::${encryptedId}`;

    sessionStorage.setItem('UserId', encryptedSessionId);
    sessionStorage.setItem('UserName', user.userName);
    sessionStorage.setItem('UserType', user.userType);
  }

  validateUserSession() {
    if (!this.isBrowser()) return; // ✅ Prevent during SSR

    let userId = sessionStorage.getItem('UserId') || '';
    if (userId == '') {
      alert('Session Expired .. Please login again....');
      this.router.navigate(['/loginAcc']);
    }
  }

  getUserId(): string {
    if (!this.isBrowser()) return ''; // ✅ Added

    const storedData = sessionStorage.getItem('UserId');
    if (!storedData || !storedData.includes('::')) return '';

    const [salt, cipherText] = storedData.split('::');
    const bytes = CryptoJS.AES.decrypt(cipherText, this.secretKey + salt);
    const decryptedId = bytes.toString(CryptoJS.enc.Utf8);
    return decryptedId;
  }

  isSessionAvailable() {
    if (!this.isBrowser()) return false; // ✅ Added
    let userId = sessionStorage.getItem('UserId') || '';
    return userId !== '';
  }

  // ✅ Added browser guard to all storage-based methods
  setLocationSession(lId: any) {
    if (!this.isBrowser()) return;
    const locationString = lId.toString();
    const salt = Date.now().toString() + Math.random().toString(36).substring(2, 8);
    const encryptedLocation = CryptoJS.AES.encrypt(locationString, this.secretKey + salt).toString();
    const encryptedData = `${salt}::${encryptedLocation}`;
    sessionStorage.setItem('locationId', encryptedData);
  }

  getLocationId(): string {
    if (!this.isBrowser()) return '';
    const storedData = sessionStorage.getItem('locationId');
    if (!storedData || !storedData.includes('::')) return '';
    const [salt, cipherText] = storedData.split('::');
    const bytes = CryptoJS.AES.decrypt(cipherText, this.secretKey + salt);
    const decryptedLocation = bytes.toString(CryptoJS.enc.Utf8);
    return decryptedLocation;
  }

  setCarsSession(cId: any) {
    if (!this.isBrowser()) return;
    const carsIdString = cId.toString();
    const salt = Date.now().toString() + Math.random().toString(36).substring(2, 8);
    const encryptedCarsId = CryptoJS.AES.encrypt(carsIdString, this.secretKey + salt).toString();
    const encryptedData = `${salt}::${encryptedCarsId}`;
    sessionStorage.setItem('carsId', encryptedData);
  }

  getCarsId(): string {
    if (!this.isBrowser()) return '';
    const storedData = sessionStorage.getItem('carsId');
    if (!storedData || !storedData.includes('::')) return '';
    const [salt, cipherText] = storedData.split('::');
    const bytes = CryptoJS.AES.decrypt(cipherText, this.secretKey + salt);
    const decryptedCarId = bytes.toString(CryptoJS.enc.Utf8);
    return decryptedCarId;
  }

  logoutSession() {
    if (!this.isBrowser()) return; // ✅ Prevent during SSR
    this.isUserLoggedIn = false;
    sessionStorage.removeItem('UserId');
    sessionStorage.removeItem('UserName');
    sessionStorage.removeItem('UserType');
    setTimeout(() => {
      this.router.navigate(['loginAcc']);
    }, 3000);
  }
}
