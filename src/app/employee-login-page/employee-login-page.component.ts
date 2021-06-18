import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-login-page',
  templateUrl: './employee-login-page.component.html',
  styleUrls: ['./employee-login-page.component.css']
})
export class EmployeeLoginPageComponent implements OnInit {

  loginRoute: string[] = ['/'];

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  async submitForm(){
    let emailInp = (<HTMLInputElement>document.getElementById("email")).value;
    let passwordInp = (<HTMLInputElement>document.getElementById("password")).value;
    let dashboardRoute: string[] = ['/employee/dashboard'];

    console.log(emailInp, passwordInp);

    let params = {
      email: emailInp,
      password: passwordInp,
    };

    fetch('http://localhost:3000/worker/login?'+ new URLSearchParams(params),{
      method: 'POST',
      mode: 'cors',
    }).then(response => response.json()).then( response => {
      console.log(response.token);
      if(response.token){
        localStorage.setItem('token', response.token);
        this.router.navigate(dashboardRoute);
      }else{
        alert("Incorrect credentials");
      }
    })
  }
}
