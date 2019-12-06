import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent implements OnInit {

  adminRegisterForm:FormGroup;
  constructor() { }

  ngOnInit() {
  
  this.adminRegisterForm=new FormGroup({
    'firstname': new FormControl(null, [Validators.required,Validators.pattern('^[a-zA-Z0-9]+$'), Validators.maxLength(50)]),
    'lastname': new FormControl(null, [Validators.required,Validators.pattern('^[a-zA-Z0-9]+$'), Validators.maxLength(50)]),
    'age': new FormControl(null, [Validators.required,Validators.pattern('^[0-9]+$'), Validators.maxLength(2)]),
    'gender': new FormControl(null, [Validators.required, Validators.maxLength(10)]),
    'dateOfBirth': new FormControl(null, [Validators.required]),
    'contactNo': new FormControl(null,[Validators.required, Validators.pattern('^[0-9]+$'), Validators.maxLength(10)]),
    'altContactNo': new FormControl(null, [Validators.pattern('^[0-9]+$'),Validators.maxLength(10)]),
    'email': new FormControl(null, [Validators.required,Validators.email,Validators.maxLength(50)]),
    'password': new FormControl(null, [Validators.required,Validators.maxLength(15)])
  })
  console.log(this.adminRegisterForm.get('firstname'));
}

onSignUpSubmit(){
  console.log("helllo Admin signup");
  console.log(this.adminRegisterForm.value['firstname']);
}

get firstname(){
  return this.adminRegisterForm.get('firstname');
}
get lastname(){
  return this.adminRegisterForm.get('lastname');
}
get age(){
  return this.adminRegisterForm.get('age');
}
get gender(){
  return this.adminRegisterForm.get('gender');
}
get dateOfBirth(){
  return this.adminRegisterForm.get('dateOfBirth');
}

get contactNo(){
  return this.adminRegisterForm.get('contactNo');
}
get altContactNo(){
  return this.adminRegisterForm.get('altContactNo');
}
get email(){
  return this.adminRegisterForm.get('email');
}
get password(){
  return this.adminRegisterForm.get('password');
}
}
