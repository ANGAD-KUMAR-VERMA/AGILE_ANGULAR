import { Component, OnInit, Input } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from 'src/app/model/patient.model';
import { User } from 'src/app/services/user.model';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  @Input()
  patients:Patient[];
  tempPatients:Patient[];
  user:User={};
  approveStatus:boolean=false;
 
  roleId:number;

  constructor(private patientService:PatientService,private userService:UserService,private authService:AuthService) { }

  ngOnInit() {
    this.patientService.getPatients().subscribe((data:Patient[])=>{
      this.tempPatients= [...data]
      this.patients= [...data]
    })
  }

  disApprove(username:string)
  {
    this.userService.getUser(username).subscribe((data)=>{
       
      
          this.user.username=data['username'],
          console.log(this.user.username)
          this.user.firstname=data['firstname'],
          this.user.lastname=data['lastname'],
          this.user.password=data['password'],
          this.user.status=false,
          this.user.roleList=data['roleList'],
          this.roleId = this.user.roleList[0].id;
          if(this.roleId==1){
              this.user.admin=data['admin']
           }
            if(this.roleId==2){
            this.user.patient=data['patient']
           }
          if(this.roleId==3){
          this.user.doctor=data['doctor']
           }
           if(this.roleId==4){
          this.user.agent=data['agent']
          }
    this.userService.updatePatient(this.user,username).subscribe();
    })

  }


  approve(username:string)
  {
    this.userService.getUser(username).subscribe((data)=>{
       
          this.user.username=data['username'],
          console.log(this.user.username)
          this.user.firstname=data['firstname'],
          this.user.lastname=data['lastname'],
          this.user.password=data['password'],
          this.user.status=true,
          this.user.roleList=data['roleList'],
          this.roleId = this.user.roleList[0].id;
          if(this.roleId==1){
              this.user.admin=data['admin']
           }
            if(this.roleId==2){
            this.user.patient=data['patient']
           }
          if(this.roleId==3){
          this.user.doctor=data['doctor']
           }
           if(this.roleId==4){
          this.user.agent=data['agent']
          }

    this.userService.updatePatient(this.user,username).subscribe();
    })

  }

  isEditable(){
    if(this.authService.isAdmin || this.authService.isAgent || this.authService.isDoctor)
    return true;
  }

}
