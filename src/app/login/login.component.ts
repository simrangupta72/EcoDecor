import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from 'src/app/services/user-registration.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;

   credentials:any;
  flag = 1;
  constructor(private service:UserRegistrationService,private router:Router) { }
  ngOnInit(){
    
  }
onLogin(form)
{
  
let response = this.service.gettingCredentials();
response.subscribe((data) => this.credentials = data);
let email:String = form.value.email;
let password:String = form.value.password
console.log(this.credentials);
for(let i=0;i<this.credentials.length;i++){
if( email == this.credentials[i].email && password==this.credentials[i].password && form.valid == true)
{
 
  this.flag=1;
 alert("Login successfully");
 this.router.navigateByUrl("");
  break;

}
else {
  // console.log(this.credentials[i].password);
  this.flag = 0;
}
}
if(this.flag == 0)
{
  alert("Invalid Credentials");
}

}
  
}


