import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { Doctor } from 'src/app/model/doctor.model';
import { User } from 'src/app/services/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  
  signupForm:FormGroup;
  userNameTaken:boolean = false;
  userNameEmpty:boolean = true;
  submitStatus: boolean = false;
  alreadyExist: boolean = false;
  role:string;
  asAdmin:boolean;
  asAgent:boolean;
  asDoctor:boolean;
  asPatient:boolean;
  constructor(private userService:UserService,private authService:AuthService) { }

  ngOnInit() {

    this.signupForm=new FormGroup({
      'role':new FormControl('admin',Validators.required),
      'username': new FormControl(null, [Validators.required,Validators.pattern('^[a-zA-Z0-9]+$'), Validators.maxLength(50)]),
      'firstname': new FormControl(null, [Validators.required,Validators.pattern('^[a-zA-Z0-9]+$'), Validators.maxLength(50)]),
      'lastname': new FormControl(null, [Validators.required,Validators.pattern('^[a-zA-Z0-9]+$'), Validators.maxLength(50)]),
      'age': new FormControl(null, [Validators.required,Validators.pattern('^[0-9]+$'), Validators.maxLength(2)]),
      'gender': new FormControl(null, [Validators.required, Validators.maxLength(10)]),
      'dateOfBirth': new FormControl(null, [Validators.required]),
      'contactNo': new FormControl(null,[Validators.required, Validators.pattern('^[0-9]+$'), Validators.maxLength(10),Validators.minLength(10)]),
      'altContactNo': new FormControl(null, [Validators.pattern('^[0-9]+$'),Validators.maxLength(10),Validators.minLength(10)]),
      'email': new FormControl(null, [Validators.required,Validators.email,Validators.maxLength(50)]),
      'password': new FormControl(null, [Validators.required,Validators.maxLength(15)]),
      'address1': new FormControl(null, [Validators.maxLength(100)]),
      'address2': new FormControl(null, [Validators.maxLength(100)]),
      'city': new FormControl(null, [Validators.maxLength(50)]),
      'state': new FormControl(null, [Validators.maxLength(50)]),
      'zipcode': new FormControl(null, [Validators.maxLength(10),Validators.pattern('^[0-9]+$')]),
      'degree': new FormControl(null, [Validators.maxLength(50)]),
      'speciality': new FormControl(null, [Validators.maxLength(50)]),
      'workhours': new FormControl(null, [Validators.maxLength(20)]),
      'hospitalname': new FormControl(null, [Validators.maxLength(100)]),
    })
    console.log(this.signupForm.get('firstname'));
  }

  onSignUpSubmit(){
    console.log("helllo signup");
    console.log(this.signupForm.value['firstname']);
    
    this.submitStatus = true;
    let doctor:Doctor;
    let user:User;

    this.role = this.signupForm.controls['role'].value;
    if(this.role==="admin"){

      user={
        username: this.signupForm.get('username').value,
        password: this.signupForm.get('password').value,
        status:false,
        admin:{
          username: this.signupForm.get('username').value,
          firstname: this.signupForm.get('firstname').value,
          lastname: this.signupForm.get('lastname').value,
          age:this.signupForm.get('age').value,
          gender:this.signupForm.get('gender').value===true?"male":"female",
          dateOfBirth:this.signupForm.get('dateOfBirth').value,
          contactNo:this.signupForm.get('contactNo').value,
          altContactNo:this.signupForm.get('altContactNo').value,
          email:this.signupForm.get('email').value,
          password: this.signupForm.get('password').value,
          status:false
        }  
      }
    }
    else if(this.role === "agent"){
 
      user={
        username: this.signupForm.get('username').value,
        password: this.signupForm.get('password').value,
        status:false,
        agent:{
          username: this.signupForm.get('username').value,
          firstname: this.signupForm.get('firstname').value,
          lastname: this.signupForm.get('lastname').value,
          age:this.signupForm.get('age').value,
          gender:this.signupForm.get('gender').value===true?"male":"female",
          dateOfBirth:this.signupForm.get('dateOfBirth').value,
          contactNo:this.signupForm.get('contactNo').value,
          altContactNo:this.signupForm.get('altContactNo').value,
          email:this.signupForm.get('email').value,
          password: this.signupForm.get('password').value,
          address1:this.signupForm.get('address1').value,
          address2:this.signupForm.get('address2').value,
          city:this.signupForm.get('city').value,
          state:this.signupForm.get('state').value,
          zipcode:this.signupForm.get('zipcode').value,
          status:false
      
        }  
      }
    }
    else if(this.role === "doctor")
    {

      user={
        username: this.signupForm.get('username').value,
        password: this.signupForm.get('password').value,
        status:false,
        doctor:{
          username: this.signupForm.get('username').value,
          firstname: this.signupForm.get('firstname').value,
          lastname: this.signupForm.get('lastname').value,
          age:this.signupForm.get('age').value,
          gender:this.signupForm.get('gender').value===true?"male":"female",
          dateOfBirth:this.signupForm.get('dateOfBirth').value,
          contactNo:this.signupForm.get('contactNo').value,
          altContactNo:this.signupForm.get('altContactNo').value,
          email:this.signupForm.get('email').value,
          password: this.signupForm.get('password').value,
          address1:this.signupForm.get('address1').value,
          address2:this.signupForm.get('address2').value,
          city:this.signupForm.get('city').value,
          state:this.signupForm.get('state').value,
          zipcode:this.signupForm.get('zipcode').value,
          degree:this.signupForm.get('degree').value,
          speciality:this.signupForm.get('speciality').value,
          workhours:this.signupForm.get('workhours').value,
          hospitalname:this.signupForm.get('hospitalname').value,
          status:false
  
      
        }  
      }
    }
    else if(this.role === "patient")
    {

      user={
        username: this.signupForm.get('username').value,
        password: this.signupForm.get('password').value,
        status:false,
        patient:{
          username: this.signupForm.get('username').value,
          firstname: this.signupForm.get('firstname').value,
          lastname: this.signupForm.get('lastname').value,
          age:this.signupForm.get('age').value,
          gender:this.signupForm.get('gender').value===true?"male":"female",
          dateOfBirth:this.signupForm.get('dateOfBirth').value,
          contactNo:this.signupForm.get('contactNo').value,
          altContactNo:this.signupForm.get('altContactNo').value,
          email:this.signupForm.get('email').value,
          password: this.signupForm.get('password').value,
          address1:this.signupForm.get('address1').value,
          address2:this.signupForm.get('address2').value,
          city:this.signupForm.get('city').value,
          state:this.signupForm.get('state').value,
          zipcode:this.signupForm.get('zipcode').value,
          status:false
  
      
        }  
      }
    }
  
  
    console.log(user);
  
    
    this.userService.authenticate(user).subscribe(null, (error) => {
      this.alreadyExist = (error['error']['status'] == 400) ? true : false
  
      if (this.alreadyExist) {
        this.submitStatus = false;
        return;
      }
    })
    this.authService.userAuthenticated.username = user.username;
    this.signupForm.reset();
    }
  
    userTaken(){
      let username = this.signupForm.get('username').value
      if(username.length==0){
        return;
      }
      this.userService.userAvailable(username).subscribe((data=>{
        
        if(username.length == 0){
          this.userNameEmpty = true;
        }
        else{
          this.userNameEmpty = false;
        }
        this.userNameTaken= data;  
    
      }))
    }

  

  get username(){
    return this.signupForm.get('username');
  }

  get firstname(){
    return this.signupForm.get('firstname');
  }
  get lastname(){
    return this.signupForm.get('lastname');
  }
  get age(){
    return this.signupForm.get('age');
  }
  get gender(){
    return this.signupForm.get('gender');
  }
  get dateOfBirth(){
    return this.signupForm.get('dateOfBirth');
  }

  get contactNo(){
    return this.signupForm.get('contactNo');
  }
  get altContactNo(){
    return this.signupForm.get('altContactNo');
  }
  get email(){
    return this.signupForm.get('email');
  }
  get password(){
    return this.signupForm.get('password');
  }
  
  get address1(){
    return this.signupForm.get('address1');
  }

  get address2(){
    return this.signupForm.get('address2');
  }
  get city(){
    return this.signupForm.get('city');
  }
  get state(){
    return this.signupForm.get('state');
  }
  get zipcode(){
    return this.signupForm.get('zipcode');
  }
  get degree(){
    return this.signupForm.get('degree');
  }
  get speciality(){
    return this.signupForm.get('speciality');
  }
  get workhours(){
    return this.signupForm.get('workhours');
  }
  get hospitalname(){
    return this.signupForm.get('hospitalname');
  }

  checkValue(){

    console.log(this.signupForm.get('role'));
    this.role = this.signupForm.controls['role'].value;
    if(this.role === "admin")
    {
      this.asAdmin = true;
      this.asAgent=false;
      this.asDoctor=false;
      this.asPatient=false;

    }
    else if(this.role=== "agent")
    {
      this.asAdmin = false;
      this.asAgent= true;
      this.asDoctor=false;
      this.asPatient=false;
    }
     else if(this.role === "doctor")
     {
      this.asAdmin = false;
      this.asAgent=false;
      this.asDoctor = true;
     this.asPatient=false;
     }
       
     else if(this.role === "patient")
     {
      this.asAdmin = false;
      this.asAgent=false;
      this.asDoctor=false;
      this.asPatient=true;   
     }   
     
     console.log(this.asAdmin);
     console.log(this.asAgent);
     console.log(this.asDoctor);
     console.log(this.asPatient);
  }

 


}
