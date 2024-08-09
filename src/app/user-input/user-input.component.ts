import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
 
  //function that emits the data to the parent component
  @Output() calculate = new EventEmitter<{
    initialInvestment: number,
    duration: number,
    expectedReturn: number,
    annualInvestment: number
  }>();

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment,
      duration: + this.enteredDuration,
      expectedReturn: + this.enteredExpectedReturn,
      annualInvestment: + this.enteredAnnualInvestment
    });
  }

  


  
}
