import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  //declaring the variable inn the form
  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '0';
  enteredDuration = '0';

  constructor(private investmentService:InvestmentService){}
 
  //function that emits the data to the parent component
  @Output() calculate = new EventEmitter<{
    initialInvestment: number,
    duration: number,
    expectedReturn: number,
    annualInvestment: number
  }>();

  onSubmit() {
    this.investmentService.onCalculateInvestmentResults(
      {
        initialInvestment: +this.enteredInitialInvestment,
        duration: + this.enteredDuration,
        expectedReturn: + this.enteredExpectedReturn,
        annualInvestment: + this.enteredAnnualInvestment
      }
    );
  }

  


  
}
