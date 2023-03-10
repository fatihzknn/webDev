import { user } from 'src/app/models/user';
import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';


@Pipe({
  name: 'filterUser'
})
export class FilterUserPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    throw new Error('Method not implemented.');
  }

  // transform(userList: user[], filterText:string): user[] {
  //   filterText = filterText.toLowerCase;
  //   console.log(filterText);
  //   console.log(userList);
  //   return filterText? userList.filter((u: userList)=> u.name.toLowerCase().indexOf(filterText)!==-1):userList;
  // }

}
