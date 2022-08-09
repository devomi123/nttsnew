import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup

  constructor( private fb:FormBuilder ,private route:Router) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      password: [''],
      email: ['']

    });
  if(localStorage.getItem("logdata")!=null){
     this.route.navigate(["home"])
  }

  }
  login(data:any){
     if(data.email =="omkar@gmail.com" && data.password == "1234"){
        alert("You Are Succesfully Login")
        localStorage.setItem("logdata",data)
        this.route.navigate(["home"])
     }
     else{
       alert("Invalid Credential")
     }


  }
}
