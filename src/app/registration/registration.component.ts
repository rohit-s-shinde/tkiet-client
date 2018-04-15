import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  fn=true;
  ln=true;
  em=true;
  ps=true;
  constructor(private router: Router) { }

  ngOnInit() {
  } 

  regUser(e)
  {
    const fname = ((document.getElementById('fname') as HTMLInputElement).value);
    const lname = ((document.getElementById('lname') as HTMLInputElement).value);
    const email = ((document.getElementById('email') as HTMLInputElement).value);
    const pass = ((document.getElementById('password') as HTMLInputElement).value);
    if(fname==="")
    {
      this.fn=false;
    }
    else
    {
      this.fn=true;
    }
    if(lname==="")
    {
      this.ln=false;
    }
    else
    {
      this.ln=true;
    }
    if(email==="")
    {
      this.em=false;
    }
    else
    {
      this.em=true;
    }
    if(pass==="")
    {
      this.ps=false;
    }
    else
    {
      this.ps=true;
    }
    if(this.fn==true && this.ln==true && this.em==true && this.ps==true)
    {
      alert('Registration Successfully '+fname+lname+email+pass);
    //this.router.navigate(['dashboard']);
    }
  }

}
