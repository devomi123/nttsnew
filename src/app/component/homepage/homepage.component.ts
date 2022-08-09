import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { concat } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  form!: FormGroup
  constructor(private fb:FormBuilder ,private route:Router) { }
  num = 10
  ngOnInit(): void {
    this.form = this.fb.group({
      mobileNumber:['', [Validators.required ,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$") ]],
      newtext : ['']
    });
  }
logout(){
  localStorage.clear()
  this.route.navigate([""])
}
get f(){
  return this.form.controls;
}
submit(){
 let a =  this.form.controls['newtext'].value
 if(a.length > 10 ){
 let b = a.substring(0,10).concat('...')
   console.log(b);
 }
}
}
