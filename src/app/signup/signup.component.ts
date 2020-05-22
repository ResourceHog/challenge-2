import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }
  
  password : String = "";
  cPassword : String = "";
  disable = false;

  validPassword = true;
  validEmail = true;


  ngOnInit() {

    
  }


  ngAfterViewInit(){
    console.log("test");
    this.emailValid();
    this.passwordValidate();
  }
  passwordValidate() {
    let inputs = document.getElementsByTagName("input");
    let passwords = [inputs[2], inputs[3]];
    if(this.password === this.cPassword){ 
      (passwords[0] as HTMLInputElement).setCustomValidity('');
      (passwords[1] as HTMLInputElement).setCustomValidity('');
      this.validPassword = false;
    } else {
      console.log("should reach here");
      passwords[0].setCustomValidity('Password Must be Matching.');
      passwords[1].setCustomValidity('Password Must be Matching.');
      this.validPassword = true;
    }
    this.updateButton();
  }

  emailValid(){
    let email = <HTMLInputElement>(document.getElementById("email"))
    this.validEmail = !email.validity.valid;
    console.log("password is valid?: " + email.validity.valid);
    this.updateButton();
  }

  updateButton(){
    this.disable = this.validPassword === true || this.validEmail === true;
    console.log(this.disable);
  }
}
