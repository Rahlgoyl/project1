import { isDefined } from "@angular/compiler/src/util";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'f2-root',
    templateUrl:'./f2.component.html',
    styleUrls:['./f2.component.scss']
})
export class F2Component implements OnInit {

    ngOnInit(): void{};
}

class Led {

   static blink = (blinking:number = 0) =>  { 
        console.log(`led light has ${blinking} blinks`)
    }
}

Led.blink(1000);

const details = (name: string, age: number) => `My name is ${name}. My Age is ${age}.`;

console.log(details('Rahul', 29));

const message = (col1:string, col2:string, col3:string, shape ?:string) =>`Sun is ${col1}, Moon is ${col2} and Sky is ${col3}.Shape of Sun and moon is ${shape ?? 'not available'}`;
   
console.log(message('Red', 'White','blue'));

const num = [2,4,6,8]
// console.log(num[2]);
// console.log(num[3]);
for(let i=0; i<num.length; i++) {
    console.log(num[i] * num[i])    
}

interface Hello {
    firstname: string,
    lastname: string,
    sayHello: ()=>string
}
const child:Hello = {
    firstname: "Shamik",
    lastname: "Goyal",
    sayHello: ():string=>{return "Hi there"}
}
console.log("Children Data:")
console.log(`${child.sayHello()} ${child.firstname} ${child.lastname}`)

const parent:Hello = {
    firstname: "Rahul",
    lastname: "Goyal",
    sayHello: ():string=>{return "Hi there!!!"}
}
console.log("Parents Data:");
console.log(`${parent.sayHello()} ${parent.firstname} ${parent.lastname}`)

const x = 22;
const y = 25;
let s = x + y;
let m = x - y;
console.log(s)
console.log(m>0? "positive":"negative")
console.log(typeof x)

function disp(name:string|string[]) { 
    if(typeof name == "string") { 
       console.log(name) 
    } else { 
       var i; 
       
       for(i = 0;i<name.length;i++) { 
          console.log(name[i])
       } 
    } 
 } 
 disp("mark") 
 console.log("Printing names array....") 
 disp(["Mark","Tom","Mary","John"])