import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submitForm(){
    let emailInp = (<HTMLInputElement>document.getElementById("email")).value;
    let passwordInp = (<HTMLInputElement>document.getElementById("password")).value;
    let firstNameInp = (<HTMLInputElement>document.getElementById("first_name")).value;
    let lastNameInp = (<HTMLInputElement>document.getElementById("last_name")).value;
    let loginRoute: string[] = ['/employee/login'];

    const params = {
      email: emailInp,
      password: passwordInp,
      first_name: firstNameInp,
      last_name: lastNameInp,
    }

    fetch('http://localhost:3000/worker/add?' + new URLSearchParams(params), {
      method: 'POST',
      mode: 'cors'
    }).then(response => response.json()).then(response => {
      console.log("Reigstered");
      this.router.navigate(loginRoute);
    })
  }
}
