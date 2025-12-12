import { CurrencyPipe, DatePipe, JsonPipe, NgFor, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GeneralPipe } from './custompipes/general-pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgFor,UpperCasePipe,CurrencyPipe,DatePipe,JsonPipe,GeneralPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angularlatest');

  name:string = "ravi singh";
  age:number = 30;
  emp:any[] = ["kumar",20,"mohan",true];
  userlist:string[] = ["kumar","ravi","pankaj"];

  info()
  {
    alert("welcome to msg");
  }

  worker:any[] = [{name:"ravi",age:20},{name:"rohit",age:30},{name:"pankaj",age:50,address:"delhi"}];


employname:string = "mohan singh";
price:number = 600;

mydate:any = new Date();

address:any = "delhi";




}
