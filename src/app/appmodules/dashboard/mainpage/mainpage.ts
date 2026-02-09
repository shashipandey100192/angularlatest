import { Component } from '@angular/core';
import { Genralpage } from '../../services/genralpage';

@Component({
  selector: 'app-mainpage',
  imports: [],
  templateUrl: './mainpage.html',
  styleUrl: './mainpage.scss',
})
export class Mainpage {

  constructor(private genral:Genralpage){}


myproduct:any;

mydata()
{
  this.genral.getmydata().subscribe((d:any)=>{
    console.log(d);
    this.myproduct = d.products;
  })
}


}
