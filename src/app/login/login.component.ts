import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logInFail=false;
  name: string;
  password: string;
  constructor(private router: Router) {
    //this.loadPeople();
   }
  ngOnInit() {
    
  }

  loginUser(e) {
    const uname = ((document.getElementById('username') as HTMLInputElement).value);
    const pass = ((document.getElementById('password') as HTMLInputElement).value);
    //this.loadPeople();
    if (uname === 'admin' && pass === '1234') {
      this.name = uname;
      this.password = pass;
      sessionStorage.setItem("userName",uname);
      sessionStorage.setItem("password",pass);
      this.router.navigate(['dashboard']);
    }
    else
    {
      this.logInFail=true;
    }
  }

}
