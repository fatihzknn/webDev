import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  inputString: string = 'Deneme 12'
  color: string = 'rgba(23,234,34,1)'
  inputEx: string = ''
  userForm = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required)
  })


  constructor() {

  }

  ngOnInit(): void {

  }

  changefunction(e: any) {
    console.log(e)
  }


  submitForm(){
    console.log(this.userForm.value)
  }




}
