import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'general',
})
export class GeneralPipe implements PipeTransform {

  // transform(xyz:any): any {
  //   return xyz.toUpperCase();
  // }

  transform(xyz:any): any {
    if(xyz=="new delhi")
    {
      return xyz.toUpperCase();
    }
    else if(xyz=="delhi")
    {
      return xyz.toLowerCase();
    }
    else
    {
      return "Other Address";
    }
  }

}
