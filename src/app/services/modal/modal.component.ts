import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { DatepickerComponent } from "../datepicker/datepicker.component";

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

  @Input() cssClass = '';
  @Input() cssInpt = '';
  @Input() cndn :boolean = false;
  @Input() cityInput : boolean = false;
  @Input() datePickerInput : boolean = false;
  
  constructor(
		config: NgbModalConfig,
		private modalService: NgbModal,
	) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
	}

	open(content:any) {
		this.modalService.open(content);
	}
	// open2(content2:any) {
	// 	this.modalService.open(content2);
	// }
}
