import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './site/login/login.component';
import { AdminSignupComponent } from './site/admin-signup/admin-signup.component';
import { PatientSignupComponent } from './site/patient-signup/patient-signup.component';
import { AgentSignupComponent } from './site/agent-signup/agent-signup.component';
import { DoctorSignupComponent } from './site/doctor-signup/doctor-signup.component';
import { MenuComponent } from './menu/menu.component';



const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'signup', component:AgentSignupComponent},
  {path:'adminSignup', component:AdminSignupComponent},
  {path:'patientSignup', component:PatientSignupComponent},
  {path:'agentSignup', component:AgentSignupComponent},
  {path:'doctorSignup', component:DoctorSignupComponent},
  {path:'menu',component:MenuComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
