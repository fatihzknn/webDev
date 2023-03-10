import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userList: user[] = []
  userColumns: string[] = []
  filterText:string = "";

  constructor(private userService: UserService) { }


  ngOnInit(): void {
    this.getUsers()
  }


  getUsers() {
    this.userService.getAllUsers().subscribe(res => {

      this.userList = res
      this.userColumns = Object.keys(this.userList[0])
      this.userColumns.push('action')
    })
  }


  DeleteUser(user: user) {
    this.userList=this.userList.filter(x => x.id !== user.id)
  }

  submitFilter(filterText:any) {
     this.filterText = this.filterText
  }

  UpdateUser(user:user){
    
  }


}
