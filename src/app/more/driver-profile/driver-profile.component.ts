

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface DriverProfile {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  driverLicense: string;
  avatar: string;
  role: string;
  rating: number;
  totalTrips: number;
  memberSince: string;
  currentSubscription: {
    plan: string;
    status: string;
    currentVehicle: string;
    monthlyPrice: number;
    nextBillingDate: string;
    milesUsed: number;
    milesAllowed: number;
  };
}

interface Activity {
  icon: string;
  title: string;
  description: string;
  time: string;
}

interface EmergencyContact {
  name: string;
  relationship: string;
  phone: string;
  email: string;
}

@Component({
  selector: 'app-driver-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './driver-profile.component.html',
  styleUrl: './driver-profile.component.scss'
})
export class DriverProfileComponent implements OnInit{

  driverProfile: DriverProfile = {
    firstName: 'Michael',
    lastName: 'Thompson',
    email: 'michael.thompson@email.com',
    phone: '+1 (555) 123-4567',
    dateOfBirth: 'March 15, 1985',
    driverLicense: 'DL-789456123',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    role: 'Premium Member',
    rating: 4.8,
    totalTrips: 147,
    memberSince: '2022',
    currentSubscription: {
      plan: 'Premium',
      status: 'active',
      currentVehicle: 'Toyota Camry 2023',
      monthlyPrice: 299,
      nextBillingDate: 'Dec 15, 2024',
      milesUsed: 850,
      milesAllowed: 1200
    }
  };

  recentActivities: Activity[] = [
    {
      icon: 'fas fa-car',
      title: 'Vehicle Changed',
      description: 'Switched to Toyota Camry 2023',
      time: '2 hours ago'
    },
    {
      icon: 'fas fa-credit-card',
      title: 'Payment Processed',
      description: 'Monthly subscription fee - $299',
      time: '1 day ago'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Trip Completed',
      description: 'Airport transfer - 45 miles',
      time: '2 days ago'
    },
    {
      icon: 'fas fa-star',
      title: 'Rating Received',
      description: '5-star rating from passenger',
      time: '3 days ago'
    }
  ];

  emergencyContacts: EmergencyContact[] = [
    {
      name: 'Sarah Thompson',
      relationship: 'Spouse',
      phone: '+1 (555) 987-6543',
      email: 'sarah.t@email.com'
    },
    {
      name: 'Robert Johnson',
      relationship: 'Brother',
      phone: '+1 (555) 456-7890',
      email: 'robert.j@email.com'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  updateProfile(): void {
    alert('Edit profile functionality would open here');
  }

  viewDocuments(): void {
    alert('Document management would open here');
  }

  contactSupport(): void {
    alert('Support contact modal would open here');
  }

  changeVehicle(): void {
    alert('Vehicle change interface would open here');
  }

  upgradePlan(): void {
    alert('Plan upgrade options would be shown here');
  }
}