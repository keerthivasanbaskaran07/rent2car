import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbScrollSpyModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cars-details',
  standalone: true,
  imports: [NgbDropdownModule ,NgbScrollSpyModule, FormsModule],
  templateUrl: './cars-details.component.html',
  styleUrl: './cars-details.component.scss'
})
export class CarsDetailsComponent {

}
