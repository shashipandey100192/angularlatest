import { Component } from '@angular/core';
import {NgStyle} from '@angular/common'

@Component({
  selector: 'app-userlogin',
  imports: [NgStyle],
  templateUrl: './userlogin.html',
  styleUrl: './userlogin.scss',
})
export class Userlogin {

fs:number = 70;

xys()
{
  alert("welcome");
}

b:any;
xys1(a:any)
{
  alert(a.target.value);
  console.log(a);
}

mycolor:string ="red";
xys2(a:any)
{
  this.mycolor = a.target.value;
  console.log(a);
}

}
