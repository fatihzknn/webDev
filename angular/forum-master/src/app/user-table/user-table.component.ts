import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './user';

@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent {
  public users:Array<User>;

  constructor(private client:HttpClient) {
    this.users = new Array<User>();  
    this.getUsers();  
  }

  getUsers() {
    let randomIDs:Array<number> = new Array<number>();
    let rid:number = 0;
    let url:string = "https://jsonplaceholder.typicode.com/users/";
    let newUrl:string = '';

    for (let i:number = 0; i < 5; i++) {
      rid = Math.floor(Math.random() * 10) + 1;

      if (i === 0) {
        randomIDs.push(rid);
      }
      else {
        if (rid in randomIDs) {
          while (rid in randomIDs) {
            rid = Math.floor(Math.random() * 10) + 1;
          }

          randomIDs.push(rid);
        }
        else {
          randomIDs.push(rid);
        }
      }
    }
 
    for (let i:number = 0; i < randomIDs.length; i++) {
      newUrl = url;
      newUrl += randomIDs[i];
      this.client.get(newUrl).subscribe(
        (data:any[]) => {
          this.users.push({
            id: data["id"],
            name: data["name"],
            userName: data["username"],
            email: data["email"],
            street: data["address"]["street"],
            suite: data["address"]["suite"],
            city: data["address"]["city"],
            zipcode: data["address"]["zipcode"],
            lat: data["address"]["geo"]["lat"],
            lng: data["address"]["geo"]["lng"],
            phone: data["phone"],
            website: data["website"],
            companyName: data["company"]["name"],
            companyCatchPhrase: data["company"]["catchPhrase"],
            companyBS: data["company"]["bs"]
        })
      });
    }
  }
}
