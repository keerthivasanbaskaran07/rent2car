import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';


@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private router: Router) { }

  public isUserLoggedIn: boolean = false;
  private secretKey = 'My@Super$SecretKey2025!';


  // setUserSession(user:any){
  //   sessionStorage.setItem('UserId', user.id);
  //   sessionStorage.setItem('UserName', user.userName);            
  //   sessionStorage.setItem('UserType', user.userType);
  // }

  // updates 

  setUserSession(user: any) {
    // Convert numeric ID to string for encryption
    const userIdString = user.id.toString();

    // Generate a random salt to make encryption unique every login
    const salt = Date.now().toString() + Math.random().toString(36).substring(2, 8);

    // Encrypt user id using AES + salt
    const encryptedId = CryptoJS.AES.encrypt(userIdString, this.secretKey + salt).toString();

    // Store salt + encrypted text together (salt::cipher)
    const encryptedSessionId = `${salt}::${encryptedId}`;

    // Save to sessionStorage
    sessionStorage.setItem('UserId', encryptedSessionId);
    sessionStorage.setItem('UserName', user.userName);
    sessionStorage.setItem('UserType', user.userType);
  }

  validateUserSession() {
    let userId = sessionStorage.getItem('UserId') || '';
    if (userId == '') {
      alert("Session Expired .. Please login again....");
      this.router.navigate(['/loginAcc']);
    }
  }

  // getUserId() {
  //   return sessionStorage.getItem('UserId') || '';
  // }

  //  updates to decrypted

  getUserId(): string {
    const storedData = sessionStorage.getItem('UserId');
    if (!storedData || !storedData.includes('::')) return ''; // :: symbol name delimiter

    const [salt, cipherText] = storedData.split('::');

    // Decrypt using the same secret key + stored salt
    const bytes = CryptoJS.AES.decrypt(cipherText, this.secretKey + salt);
    const decryptedId = bytes.toString(CryptoJS.enc.Utf8);
    return decryptedId;
  }




  isSessionAvailable() {
    let userId = sessionStorage.getItem('UserId') || '';
    if (userId == '')
      return false;
    return true;
  }

  // setLocationSession(lId: any) {
  //   sessionStorage.setItem('locationId', lId);
  // }
  // 1️⃣ Encrypt and save LOCATION (string)
  setLocationSession(lId: any) {
    const locationString = lId.toString();

    // Random salt for uniqueness
    const salt = Date.now().toString() + Math.random().toString(36).substring(2, 8);

    // Encrypt the location string
    const encryptedLocation = CryptoJS.AES.encrypt(locationString, this.secretKey + salt).toString();

    // Store salt::cipher
    const encryptedData = `${salt}::${encryptedLocation}`;

    // Save to session
    sessionStorage.setItem('locationId', encryptedData);
  }


  //   getLocationId() {
  //   return sessionStorage.getItem('locationId') || '';
  // }

  // 2️⃣ Decrypt and get LOCATION
  getLocationId(): string {
    const storedData = sessionStorage.getItem('locationId');
    if (!storedData || !storedData.includes('::')) return '';

    const [salt, cipherText] = storedData.split('::');
    const bytes = CryptoJS.AES.decrypt(cipherText, this.secretKey + salt);
    const decryptedLocation = bytes.toString(CryptoJS.enc.Utf8);
    return decryptedLocation;
  }


  // SetCarsSession(cId: any) {
  //   sessionStorage.setItem('carsId', cId);
  // }

  // 3️⃣ Encrypt and save CAR ID (number)
  setCarsSession(cId: any) {
    const carsIdString = cId.toString();

    // Random salt for uniqueness
    const salt = Date.now().toString() + Math.random().toString(36).substring(2, 8);

    // Encrypt numeric ID
    const encryptedCarsId = CryptoJS.AES.encrypt(carsIdString, this.secretKey + salt).toString();

    // Combine salt and cipher
    const encryptedData = `${salt}::${encryptedCarsId}`;

    // Save to session
    sessionStorage.setItem('carsId', encryptedData);
  }

  // getCarsId() {
  //   return sessionStorage.getItem('carsId') || '';
  // }
  // 4️⃣ Decrypt and get CAR ID
  getCarsId(): string {
    const storedData = sessionStorage.getItem('carsId');
    if (!storedData || !storedData.includes('::')) return '';

    const [salt, cipherText] = storedData.split('::');
    const bytes = CryptoJS.AES.decrypt(cipherText, this.secretKey + salt);
    const decryptedCarId = bytes.toString(CryptoJS.enc.Utf8);
    return decryptedCarId;
  }


  logoutSession() {
    this.isUserLoggedIn = false;
    sessionStorage.removeItem('UserId');
    sessionStorage.removeItem('UserName');
    sessionStorage.removeItem('UserType');
    setTimeout(() => {
      this.router.navigate(['loginAcc']);
    }, 3000);
  }
} 