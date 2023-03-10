import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { user } from 'src/app/models/user';
import { UpdateComponent } from 'src/app/pages/update/update/update.component';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss'],
  providers: [DecimalPipe]
})
export class CustomTableComponent implements OnInit {

  @Input() data: any[] = []
  @Input() columns: any[] = []
  @Input() buttontext: string = ''
  @Output() buttonFunction: EventEmitter<any> = new EventEmitter<any>()

  editUser: user[]=[]
  edit:number =-1;
  size: number=5;
  public page = 1;
  public pageSize = 5;

  constructor(private router :Router, private http: HttpClient) {

     }

  ngOnInit(): void {
    console.log(this.columns)
  }

  buttonEvent(item: any) {
    this.buttonFunction.emit(item)
  }
  Details(user:any): void {
    this.router.navigateByUrl(`/userdetails/${user.id}`).then(r => r.valueOf());
  }

  deneme=UpdateComponent;

  Update(id : number){
    this.router.navigate(['Update', id])
  }
}
