import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toArray'
})
export class ListPipe implements PipeTransform {

  transform(value: any, args?: any[]): any[] {
    let dataArr = [];
    for (let key in value) {
      dataArr.push(key);
    }
    return dataArr;
  }

}
