import { UserRegistrationService } from 'src/app/services/user-registration.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  

  constructor(private service:UserRegistrationService,private router:Router) { }

  ngOnInit() {
  }
  onAddPost(form)
  {
    console.log("hello");
   let response =   this.service.onRegister(form.value);
   response.subscribe((data) => console.log(data));
   alert("You have been registered successfully.")
   this.router.navigateByUrl("");
  }
}
