import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { UserInputComponent } from "./user-input/user-input.component";
import type { InvestmentInput } from './investment-input.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, InvestmentResultsComponent, UserInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
onCalculateInvestmentResults($event: { initialInvestment: number; duration: number; expectedReturn: number; annualInvestment: number; }) {
throw new Error('Method not implemented.');
}
  title = 'investment-cal';
resultsData: { year: number; interest: number; valueEndOfYear: number; annualInvestment: number; totalInterest: number; totalAmountInvested: number; }[]|undefined;
}
