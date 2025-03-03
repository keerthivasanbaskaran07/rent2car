import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbCalendar, NgbDate, NgbDateParserFormatter, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-datepicker-range-popup',
  standalone: true,
  imports: [NgbDatepickerModule, FormsModule, JsonPipe],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.scss'
  
})
export class DatepickerComponent {
  calendar = inject(NgbCalendar);
  dateText : string = '';

	hoveredDate: NgbDate | null = null;
	fromDate: NgbDate = this.calendar.getToday();
	toDate: NgbDate | null = this.calendar.getNext(this.fromDate, 'd', 10);

	onDateSelection(date: NgbDate) {
		if (!this.fromDate && !this.toDate) {
			this.fromDate = date;
		} else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
			this.toDate = date;
		} else {
			this.toDate = null;
			this.fromDate = date;
		}
      this.dateText = this.fromDate.year + "-" + this.fromDate.month + "-" + this.fromDate.day;
    
	}

	isHovered(date: NgbDate) {
		return (
			this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate)
		);
	}

	isInside(date: NgbDate) {
		return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
	}

	isRange(date: NgbDate) {
		return (
			date.equals(this.fromDate) ||
			(this.toDate && date.equals(this.toDate)) ||
			this.isInside(date) ||
			this.isHovered(date)
		);
	}

}
