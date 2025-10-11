import { Component, inject, Input, input } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

 private invesmentService = inject(InvestmentService);

 get results(){
  return this.invesmentService.resultData;
 }
  //results = input<{
      //   year: number,
      //   interest: number,
      //   valueEndOfYear: number,
      //   annualInvestment: number,
      //   totalInterest: number,
      //   totalAmountInvested: number,
      // }>(...)

  // @Input() results?: {
  //       year: number,
  //       interest: number,
  //       valueEndOfYear: number,
  //       annualInvestment: number,
  //       totalInterest: number,
  //       totalAmountInvested: number,
  //     }[];
}
