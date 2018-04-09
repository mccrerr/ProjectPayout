import { PayoutData } from './project-payout.interface';

import { Injectable } from '@angular/core';

@Injectable()
export class PayoutService {

  public payout: PayoutData[] = [];
  constructor() { }

  public start() {
    this.payout = [];
  }


  public addUpdateYear(amount: PayoutData) {

    const output = this.payout.filter(element =>
      element.year === amount.year &&
      element.quarter === amount.quarter);

    if (output.length) {
      output[0].amount = amount.amount;
    } else {
      this.payout.push(amount);
    }
  }

  public retrieveData(year: string) {
    return this.payout.filter(pay =>
      year === pay.year);
  }
}
