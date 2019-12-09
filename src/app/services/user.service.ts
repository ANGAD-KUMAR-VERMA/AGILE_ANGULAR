import { Injectable, Input, OnInit } from "@angular/core";
import { Observable, Observer } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from './user.model';

@Injectable({
    providedIn: 'root'
})

export class UserService  {

    @Input()
    user:User[];
    isUserAuthenticated:boolean=false;

    constructor(private http:HttpClient) {
    }

    authenticate(user:User):Observable<any> {
        return this.http.post(`http://localhost:8080/users`,user)
    }
    userAvailable(username:string):Observable<boolean> {
        return this.http.get<boolean>(`http://localhost:8080/users/${username}`)
    }

   
   

 
}

