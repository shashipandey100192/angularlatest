import { Component } from '@angular/core';
import { Appheader } from '../../shaprescomponents/appheader/appheader';
import { Appsidebar } from '../../shaprescomponents/appsidebar/appsidebar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-fullpage',
  imports: [Appheader,Appsidebar,RouterOutlet],
  templateUrl: './fullpage.html',
  styleUrl: './fullpage.scss',
})
export class Fullpage {

}
