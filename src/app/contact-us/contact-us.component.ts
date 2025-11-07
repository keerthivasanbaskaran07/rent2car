import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';
import { apiUrls } from '../constants/globalContants';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent implements OnInit {

  fname: string = '';
  lname: string = '';
  email: any;
  subject: any;
  message: any;

  constructor(
    private apiService: ApiService,
    private sessionService: SessionService,
    private router: Router
  ) {}

  // ✅ FIX: Remove the error and make ngOnInit usable or empty
  ngOnInit(): void {
    // If you want, you can preload user info from session here.
    // Example:
    // const userName = this.sessionService.getUserId();
    // console.log('User ID:', userName);
  }

  messageAcc() {
    // ✅ Optional: guard to prevent empty form submission
    if (!this.fname || !this.email || !this.message) {
      alert('Please fill all required fields before submitting.');
      return;
    }

    const requestBody = {
      fname: this.fname,
      lname: this.lname,
      email: this.email,
      subject: this.subject,
      message: this.message,
    };

    this.apiService.createData(apiUrls.messageApi, requestBody).subscribe(
      () => {
        alert('Message sent successfully!');
        // Optionally reset form
        this.fname = this.lname = this.email = this.subject = this.message = '';
      },
      (err) => console.error('Error sending message:', err)
    );
  }
}
