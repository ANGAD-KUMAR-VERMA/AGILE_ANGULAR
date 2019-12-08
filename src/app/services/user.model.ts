import { Admin } from '../model/admin.model';
import { Patient } from '../model/patient.model';
import { Doctor } from '../model/doctor.model';
import { Agent } from '../model/agent.model';

export interface User {
    username: string;
    firstname: string;
    lastname:string;
    password: string;
    status?: boolean;
    accessToken?:string;
    admin?:Admin;
    patient?:Patient;
    agent?:Agent;
    doctor?:Doctor;
}