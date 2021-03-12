import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  "firstName": string;
  "secondName": string;
  "message": string;
  private "test": string;
  

    print(){
      this.message = `HI ${this.firstName} ${this.secondName}, Have a nice day !`;
    }
  

  constructor() { }

  ngOnInit(): void {
  }

}
