import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator App';

  calValue : number = 0;
  calFunc: any = 'No-Function';

  calNumber: string = 'noValue';

  firstNum: number = 0;
  secondNum: number = 0;

  onClickValue(btnValue : string , btnType : any){
    if(btnType == 'num'){
      this.onNumberClick(btnValue);
    }
    else if (btnType == 'func'){
    this.onOperatorClick(btnValue)
    }
  }

  onNumberClick(val : string){
    if(this.calNumber != 'noValue'){
      this.calNumber = this.calNumber + val;
    }
    else{
      this.calNumber = val;
    }
    console.log(this.calNumber);

    this.calValue = parseFloat(this.calNumber);
  }

  onOperatorClick(val: string){
    // Clear All function Checking
    if(val ==  'c'){
      this.clearAll();
    }
    else if(this.calFunc == 'No-Function'){
      this.firstNum = this.calValue;
      this.calValue = 0;
      this.calNumber = 'noValue';
      this.calFunc = val;
    }
    else if (this.calFunc != 'No-Function'){
      this.secondNum = this.calValue;

      // Calculation part
      this.calculator(val);
    }
  }
  
  calculator(value: string){
    if(this.calFunc == '+'){
      const total = this.firstNum + this.secondNum;
      this.totalAssignValues(total, value);
    } 
    if (this.calFunc == '-') {
      const total = this.firstNum - this.secondNum;
      this.totalAssignValues(total, value);
    } 
    if (this.calFunc == '/') {
      const total = this.firstNum / this.secondNum;
      this.totalAssignValues(total, value);
    } 
    if (this.calFunc == '*') {
      const total = this.firstNum * this.secondNum;
      this.totalAssignValues(total, value);
    }
    if (this.calFunc == '%') {
      const total = (this.firstNum / this.secondNum) * 100;
      this.totalAssignValues(total, value);
    }
  }

  totalAssignValues(total: number, val: string) {
      this.calValue = total;
      this.firstNum = total;
      this.secondNum = 0;
      this.calNumber = 'noValue';
      this.calFunc= val;
      if (val == '=') {this.onEqualPress();}

  }

  onEqualPress(){
      this.firstNum = 0;
      this.secondNum = 0;
      this.calNumber = 'noValue';
      this.calFunc= 'No-Function';
  }

  clearAll(){
    this.firstNum = 0;
    this.secondNum = 0;
    this.calValue = 0;
    this.calFunc= 'No-Function';
    this.calNumber = 'noValue';
  }

}
