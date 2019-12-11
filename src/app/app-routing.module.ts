import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './site/login/login.component';
import { AdminSignupComponent } from './site/admin-signup/admin-signup.component';
import { PatientSignupComponent } from './site/patient-signup/patient-signup.component';
import { AgentSignupComponent } from './site/agent-signup/agent-signup.component';
import { DoctorSignupComponent } from './site/doctor-signup/doctor-signup.component';
import { MenuComponent } from './menu/menu.component';
import { SignupOptionComponent } from './site/signup-option/signup-option.component';
import { DoctorDetailsComponent } from './doctor/doctor-details/doctor-details.component';
import { AuthGuardService } from './services/authGuard.service';
import { AgentDetailsComponent } from './agent/agent-details/agent-details.component';
import { AgentEditComponent } from './agent/agent-edit/agent-edit.component';
import { PatientDetailsComponent } from './patient/patient-details/patient-details.component';
import { DoctorEditComponent } from './doctor/doctor-edit/doctor-edit.component';
import { PatientEditComponent } from './patient/patient-edit/patient-edit.component';
import { NotFoundComponent } from './site/not-found/not-found.component';
import { SignupComponent } from './site/signup/signup.component';



const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'signup/admin', component:AdminSignupComponent},
  {path:'signup/patient', component:PatientSignupComponent},
  {path:'signup/agent', component:AgentSignupComponent},
  {path:'signup/doctor', component:DoctorSignupComponent},
  {path:'menu',component:MenuComponent},
  { path: 'edit/agent/:id', component: AgentEditComponent, canActivate: [AuthGuardService] },
  { path: 'edit/doctor/:id', component: DoctorEditComponent, canActivate: [AuthGuardService] },
  { path: 'edit/patient/:id', component: PatientEditComponent, canActivate: [AuthGuardService] },
 {path : 'doctors',component:DoctorDetailsComponent,canActivate: [AuthGuardService]},
 {path : 'patients',component:PatientDetailsComponent,canActivate: [AuthGuardService]},
 {path : 'agents',component:AgentDetailsComponent,canActivate: [AuthGuardService]},
 { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
