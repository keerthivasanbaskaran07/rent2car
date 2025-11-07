import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core'; import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { DatepickerComponent } from "../datepicker/datepicker.component";
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-modal',
	standalone: true,
	imports: [CommonModule, DatepickerComponent],
	templateUrl: './modal.component.html',
	styleUrl: './modal.component.scss',
	providers: [NgbModalConfig, NgbModal],
})
export class ModalComponent {
	[x: string]: any;
	// This is Child Components 
	//   @Input() cssClass = '';
	//   @Input() cssInpt = '';
	//   @Input() cndn :boolean = false;
	//   @Input() cityInput : boolean = false;
	//   @Input() datePickerInput : boolean = false;

	// ✅ CHANGED: Replaced 3 booleans with single "mode"
	// mode can be 'city' | 'date' | 'button' | 'empty'
	@Input() mode: 'city' | 'date' | 'button' | 'empty' = 'city';

	// ✅ CHANGED: Renamed cssInpt -> inputClass for clarity
	@Input() inputClass = '';

	@Input() cssClass = '';

	// ✅ NEW: Added @Output for communicating back to parent
	@Output() action = new EventEmitter<void>();

	constructor(
		config: NgbModalConfig,
		private modalService: NgbModal,
		private router: Router, private sessionService: SessionService
	) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
	}

	open(content: any) {
		this.modalService.open(content);
	}
	// open2(content2:any) {
	// 	this.modalService.open(content2);
	// }
	gotoDetailsLocation(lId: any) {
		this.modalService.dismissAll('Dismiss');
		this.sessionService.setLocationSession(lId);
		this.router.navigate(['/locationDts']);
	}


}
