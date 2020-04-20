import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http:HttpClient) { }

  user:User = new User("","","","","");

  onRegister(user:User)
  {
   return  this.http.post("http://localhost:8080/create",user,{responseType:'text' as 'json'});
  }
  public gettingCredentials()
  {
    return this.http.get("http://localhost:8080/getAll");
  }
}
