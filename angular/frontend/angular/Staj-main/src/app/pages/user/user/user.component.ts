import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userListSearch : user []=[]
  userList: user[] = []
  userColumns: string[] = []
  searchText="";
  editUser = {} as user;
  edit: number = -1;
  users:user[]=[]

  constructor(private userService: UserService) { }


  ngOnInit(): void {
    this.getUsers()
  }


  getUsers() {
    this.userService.getAllUsers().subscribe(res => {

      this.userList = res
      this.userColumns = Object.keys(this.userList[0])
      this.userColumns.push('action')
      this.userListSearch =res;
    })
  }


  DeleteUser(user: user) {
    this.userList=this.userList.filter(x => x.id !== user.id)
    this.userListSearch=this.userList;
  }

  Search(){
    this.userListSearch = this.userList.filter(user =>{
      if(user.name.toLowerCase().includes(this.searchText.toLowerCase())) return true;
      if(user.username.toLowerCase().includes(this.searchText.toLowerCase())) return true;
      if(user.email.toLowerCase().includes(this.searchText.toLowerCase())) return true;
      if(user.phone.toLowerCase().includes(this.searchText.toLowerCase())) return true;
      if(user.website.toLowerCase().includes(this.searchText.toLowerCase())) return true;
      return false;
    })
  }
}
