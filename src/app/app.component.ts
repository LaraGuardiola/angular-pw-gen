import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    //basically if the checkboxes are checked, then we add the characters to validChars, then we loop to randomize them

    let validChars = '';
    if(this.includeLetters){
      validChars += letters;
    }

    if(this.includeNumbers){
      validChars += numbers;
    }

    if(this.includeSymbols){
      validChars += symbols;
    }

    console.log(validChars);

    let result = '';
    for(let i = 0; i < this.length; i++){
      const index = Math.floor(Math.random() * validChars.length);
      result += validChars[index];
    }

    this.password = result;

  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  //triggered when the user has entered a value in the length input, setting the length property to the value

  onChangeLength(value: string) {
    const parsedValue = Number(value);
    
    if(!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }
}
