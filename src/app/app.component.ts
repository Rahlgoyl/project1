import { Component } from '@angular/core';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
 export class AppComponent extends TestComponent {
    "firstValue": number;
    "secondValue": number;
    "sum": number;
    "sub": number;
    "mul": number;
    "div": number;
      
    onclick(){
    this.firstValue = 10;

      this.sum = this.firstValue + this.secondValue;
      console.log(this.sum);
      this.sub = this.firstValue - this.secondValue;
      this.mul = this.firstValue * this.secondValue;
      this.div = this.firstValue / this.secondValue;
    }
    "firstName": string;
    "secondName": string;
    "message": string;
    print(){
      this.message = `HI ${this.firstName} ${this.secondName}, Have a nice day !`;
    }
  }

