import { Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
@Injectable()
export class CustomTableComponent implements OnInit {

  @Input() data: any[] = []
  @Input() columns: any[] = []
  @Input() buttontext: string = ''
  @Output() buttonFunction: EventEmitter<any> = new EventEmitter<any>()
  UserDuz = {} as user;
  edit:number= -1;
  size: number=5;

  public sheet = 2;
  public sheetSize = 5;
  constructor(private userService: UserService,
    private route: Router) {
  }

  ngOnInit(): void {
    console.log(this.columns)
    this.data
  }

  buttonEvent(item: any) {
    this.buttonFunction.emit(item)
  }
  routeUser(userData: any) {
    this.userService.getSelectedUser(userData).subscribe(userInformation => {

      this.userService.selectedUserDetail = userInformation
      this.route.navigate(['/user-detail']);
    })
  }
  Detail(user:any): void {
    this.route.navigateByUrl('/usersdetay/${user.id}').then(r => r.valueOf());
  }

}
