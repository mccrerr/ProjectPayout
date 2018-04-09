import { PayoutData } from './../project-payout.interface';
import { PayoutService } from './../payout.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'payout-project-payout',
  templateUrl: './project-payout.component.html',
  styleUrls: ['./project-payout.component.css']
})
export class ProjectPayoutComponent implements OnInit {
  public amountL1: number;
  public amountL2: number;
  public amountL3: number;
  public amountL4: number;
  public quarter: string[] = [];
  public fiscalYear: string[] = [];
  public amount: number[] = [];

  public quarterlyAmountForm;
  private yearString: string;

  constructor(public fb: FormBuilder, public payoutService: PayoutService) { }

  ngOnInit() {
    const now = new Date();
    const curMonth = now.getMonth();
    const curYear = now.getFullYear();
this.payoutService.start();

    if (curMonth > 2) {
      this.yearString = (curYear - 0).toString() + ' - ' + (curYear + 1).toString();
    } else {
      this.yearString = (curYear - 1).toString() + ' - ' + (curYear - 0).toString();
    }

    for (let i = 0; i < 4; i++) {
      this.amount[i] = 0.00;
    }

    this.quarterlyAmountForm = this.fb.group({
      amountL1: [this.amount[0]],
      amountL2: [this.amount[1]],
      amountL3: [this.amount[2]],
      amountL4: [this.amount[3]]
    });

    for (let i = 0; i < 4; i++) {
      this.fiscalYear[i] = this.yearString;
    }
    this.quarter[0] = 'Q1 (Apr - Jun)';
    this.quarter[1] = 'Q2 (Jul - Sep)';
    this.quarter[2] = 'Q3 (Oct - Dec)';
    this.quarter[3] = 'Q4 (Jan - Mar)';
  }

  public save() {

    this.amount[0] = this.quarterlyAmountForm.controls.amountL1.value;
    this.amount[1] = this.quarterlyAmountForm.controls.amountL2.value;
    this.amount[2] = this.quarterlyAmountForm.controls.amountL3.value;
    this.amount[3] = this.quarterlyAmountForm.controls.amountL4.value;

    const payoutRecord: PayoutData = { year: null,
      quarter: null,
      amount: null };

      for (let i = 0; i < 4; i++) {
      payoutRecord.year = this.fiscalYear[i];
      payoutRecord.quarter = this.quarter[i];
      payoutRecord.amount = this.amount[i];
      const temp = Object.assign({}, payoutRecord); // create deep copy of object

      this.payoutService.addUpdateYear(temp);
    }
  }

  public nextYear() {
    const firstYear = this.yearString.slice(0, 4);
    // const secondYear = this.yearString.slice(7, 11);
    this.yearString = (Number(firstYear) + 1).toString() + ' - ' + (Number(firstYear) + 2).toString();
    this.updateData();
  }

  public previousYear() {
    const firstYear = this.yearString.slice(0, 4);
    this.yearString = (Number(firstYear) - 1).toString() + ' - ' + firstYear;
    this.updateData();
  }

  private updateData() {
    for (let i = 0; i < 4; i++) {
      this.fiscalYear[i] = this.yearString;
    }

    // will need sort routine
    const newData = this.payoutService.retrieveData(this.yearString);

    if (newData.length === 4) {
      for (let i = 0; i < 4; i++) {
        this.amount[i] = newData[i].amount;
      }
    } else {
      for (let i = 0; i < 4; i++) {
        this.amount[i] = 0.0;
      }
    }
    this.quarterlyAmountForm.patchValue({
      amountL1: this.amount[0],
      amountL2: this.amount[1],
      amountL3: this.amount[2],
      amountL4: this.amount[3]
    });
  }

}
