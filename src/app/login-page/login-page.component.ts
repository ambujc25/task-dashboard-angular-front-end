import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  async submitForm(){
    let emailInp = (<HTMLInputElement>document.getElementById("email")).value;
    let passwordInp = (<HTMLInputElement>document.getElementById("password")).value;
    let dashboardRoute: string[] = ['/manager/dashboard'];

    console.log(emailInp, passwordInp);

    let params = {
      email: emailInp,
      password: passwordInp,
    };

    fetch('http://localhost:3000/manager/login?'+ new URLSearchParams(params),{
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
