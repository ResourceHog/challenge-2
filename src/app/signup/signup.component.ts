import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }
  
  password : String = "asdfa";
  cPassword : String = "asdfads";

  ngOnInit() {
    
  }
  passwordValidate(event) {
    console.log(this.password);
    console.log(this.cPassword);
    if(this.password === this.cPassword){ 
      event.target.setCustomValidity('');
    } else {
      console.log("should reach here");
      event.target.setCustomValidity('Password Must be Matching.');
    }
    
  }
}
