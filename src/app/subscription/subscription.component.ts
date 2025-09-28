import { Component } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent {
  selectedPaymentMethod: string = 'credit';

  selectPlan(planName: string) {
    alert(`You've selected the ${planName} subscription!`);
  }

  selectPaymentMethod(method: string) {
    this.selectedPaymentMethod = method;
  }

  continueToBilling() {
    alert(`Proceeding to billing details with ${this.selectedPaymentMethod} payment method.`);
  }
}