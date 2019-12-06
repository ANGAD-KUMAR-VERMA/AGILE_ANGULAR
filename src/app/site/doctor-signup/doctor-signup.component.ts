import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-doctor-signup',
  templateUrl: './doctor-signup.component.html',
  styleUrls: ['./doctor-signup.component.css']
})
export class DoctorSignupComponent implements OnInit {

  doctorRegisterForm:FormGroup;
  constructor() { }

  ngOnInit() {

    this.doctorRegisterForm=new FormGroup({
      'firstname': new FormControl(null, [Validators.required,Validators.pattern('^[a-zA-Z0-9]+$'), Validators.maxLength(50)]),
      'lastname': new FormControl(null, [Validators.required,Validators.pattern('^[a-zA-Z0-9]+$'), Validators.maxLength(50)]),
      'age': new FormControl(null, [Validators.required,Validators.pattern('^[0-9]+$'), Validators.maxLength(2)]),
      'gender': new FormControl(null, [Validators.required, Validators.maxLength(10)]),
      'dateOfBirth': new FormControl(null, [Validators.required]),
      'contactNo': new FormControl(null,[Validators.required, Validators.pattern('^[0-9]+$'), Validators.maxLength(10)]),
      'altContactNo': new FormControl(null, [Validators.pattern('^[0-9]+$'),Validators.maxLength(10)]),
      'email': new FormControl(null, [Validators.required,Validators.email,Validators.maxLength(50)]),
      'password': new FormControl(null, [Validators.required,Validators.maxLength(15)]),
      'address1': new FormControl(null, [Validators.required,Validators.maxLength(100)]),
      'address2': new FormControl(null, [Validators.maxLength(100)]),
      'city': new FormControl(null, [Validators.required,Validators.maxLength(50)]),
      'state': new FormControl(null, [Validators.required,Validators.maxLength(50)]),
      'zipcode': new FormControl(null, [Validators.required,Validators.maxLength(10),Validators.pattern('^[0-9]+$')]),
      'degree': new FormControl(null, [Validators.required,Validators.maxLength(50)]),
      'speciality': new FormControl(null, [Validators.required,Validators.maxLength(50)]),
      'workHours': new FormControl(null, [Validators.required,Validators.maxLength(20)]),
      'hospitalName': new FormControl(null, [Validators.required,Validators.maxLength(100)]),
    })
    console.log(this.doctorRegisterForm.get('firstname'));
  }

  onSignUpSubmit(){
    console.log("helllo signup");
    console.log(this.doctorRegisterForm.value['firstname']);
  }

  get firstname(){
    return this.doctorRegisterForm.get('firstname');
  }
  get lastname(){
    return this.doctorRegisterForm.get('lastname');
  }
  get age(){
    return this.doctorRegisterForm.get('age');
  }
  get gender(){
    return this.doctorRegisterForm.get('gender');
  }
  get dateOfBirth(){
    return this.doctorRegisterForm.get('dateOfBirth');
  }

  get contactNo(){
    return this.doctorRegisterForm.get('contactNo');
  }
  get altContactNo(){
    return this.doctorRegisterForm.get('altContactNo');
  }
  get email(){
    return this.doctorRegisterForm.get('email');
  }
  get password(){
    return this.doctorRegisterForm.get('password');
  }
  get address1(){
    return this.doctorRegisterForm.get('address1');
  }

  get address2(){
    return this.doctorRegisterForm.get('address2');
  }
  get city(){
    return this.doctorRegisterForm.get('city');
  }
  get state(){
    return this.doctorRegisterForm.get('state');
  }
  get zipcode(){
    return this.doctorRegisterForm.get('zipcode');
  }
  get degree(){
    return this.doctorRegisterForm.get('degree');
  }
  get speciality(){
    return this.doctorRegisterForm.get('speciality');
  }
  get workhours(){
    return this.doctorRegisterForm.get('workhours');
  }
  get hospitalName(){
    return this.doctorRegisterForm.get('hospitalName');
  }



}