import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit {
  constructor(private router: Router) {
    //this.loadPeople();
   }
  textValue="";
  d="";
  ques = [
    {
      key : 'HOD',
      info : 'Prof. A. G. Patil is HOD of Computer Science & Engineering',
      ent : 'CseEntity'
    },
    {
      key : 'divisions',
      info : 'Three divisions are available for 2nd year admission',
      ent : 'CseEntity'
    },
    {
      key : 'class Co-ordinator',
      info : 'BE class Co-ordinator is G. V Patil Sir.',
      ent : 'CseEntity'
    }
 ];

  ngOnInit() {
    
  }

  add(event)
  {
    this.router.navigate(['addnew']);
  }

  update(event)
  {
    alert('Updated');
  }

  delete(event)
  {
    this.router.navigate(['delete']);
  }
}