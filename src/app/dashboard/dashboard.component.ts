import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data="Ranjit";
  temp="i-bot.png";
  title="Wel-Come to TKIET Bot Service";
  constructor(public router: Router) {
    var uname=sessionStorage.getItem("userName");
    var pass= sessionStorage.getItem("password");
    this.data=uname;
    if(uname===null || pass===null)
    {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit() {
  }

  logoutUser(e) {
      sessionStorage.clear();
      this.router.navigate(['login']);
    }
}
