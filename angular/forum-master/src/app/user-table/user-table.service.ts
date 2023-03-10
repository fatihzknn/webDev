import { Injectable } from '@angular/core';

import { User } from './user';

@Injectable()
export class UserTableService {
  public users:Array<User>;
  
  constructor() { 
    this.users = new Array<User>();

    for (let i:number = 0; i < 10; i++) {
      let newUser:User = {
        id: (i + 1),
        name: "User #" + (i + 1),
        userName: "UserName #" + (i + 1),
        email: "username." + (i + 1) + "@example.com",
        street: ((i + 1) * 9) + " St.",
        suite: ((i + 1) * 99).toString(),
        city: "Arzamas-" + (i + 1),
        zipcode: "12345" + i,
        lat: i + "." + i + "0",
        lng: "0.00",
        phone: "555-1234-5678 x" + (i + 1),
        website: "username" + (i + 1) + ".co",
        companyName: "Company #" + (i + 1),
        companyCatchPhrase: "Catch Phrase #" + (i + 1),
        companyBS: "BS #" + (i + 1)
      };

      this.users.push(newUser);
// console.log("nu =" + newUser);
    }
  }
}
