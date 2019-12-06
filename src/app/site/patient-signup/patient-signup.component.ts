import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-patient-signup',
  templateUrl: './patient-signup.component.html',
  styleUrls: ['./patient-signup.component.css']
})
export class PatientSignupComponent implements OnInit {

  patientRegisterForm:FormGroup;
  constructor() { }

  ngOnInit() {

    this.patientRegisterForm=new FormGroup({
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
      'zipcode': new FormControl(null, [Validators.required,Validators.maxLength(10),Validators.pattern('^[0-9]+$')])
    })
  }

  onSignUpSubmit(){
    console.log("helllo signup");
    console.log(this.patientRegisterForm.value['firstname']);
  }

  get firstname(){
    return this.patientRegisterForm.get('firstname');
  }
  get lastname(){
    return this.patientRegisterForm.get('lastname');
  }
  get age(){
    return this.patientRegisterForm.get('age');
  }
  get gender(){
    return this.patientRegisterForm.get('gender');
  }
  get dateOfBirth(){
    return this.patientRegisterForm.get('dateOfBirth');
  }

  get contactNo(){
    return this.patientRegisterForm.get('contactNo');
  }
  get altContactNo(){
    return this.patientRegisterForm.get('altContactNo');
  }
  get email(){
    return this.patientRegisterForm.get('email');
  }
  get password(){
    return this.patientRegisterForm.get('password');
  }
  get address1(){
    return this.patientRegisterForm.get('address1');
  }

  get address2(){
    return this.patientRegisterForm.get('address2');
  }
  get city(){
    return this.patientRegisterForm.get('city');
  }
  get state(){
    return this.patientRegisterForm.get('state');
  }
  get zipcode(){
    return this.patientRegisterForm.get('zipcode');
  }

}
