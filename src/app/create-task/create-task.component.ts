import { ANALYZE_FOR_ENTRY_COMPONENTS, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  loginRoute: string[] = ['/'];
  dashboardRoute: string[] = ['manager/dashboard'];

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("token")===null){
      this.router.navigate(this.loginRoute);
    }
  }

  createTask(){
    let titleInp = (<HTMLInputElement>document.getElementById("title")).value;
    let descInp = (<HTMLInputElement>document.getElementById("desc")).value;
    let ttcInp = (<HTMLInputElement>document.getElementById("ttc")).value;

    if(localStorage.getItem("token") === null){
      console.log("Unauthorized");
    }else{
      let params = {
        title: titleInp,
        desc: descInp,
        time_to_complete: ttcInp,
        secret_token: localStorage.getItem('token'),
      }

      console.log(params);

      fetch("http://localhost:3000/manager/logged/add_task?" + new URLSearchParams(params), {
        method: 'POST',
        mode: 'cors',
      }).then(response => response.json()).then(response => {
        console.log('here');
        this.router.navigate(this.dashboardRoute);
      })
    }

  }

}
