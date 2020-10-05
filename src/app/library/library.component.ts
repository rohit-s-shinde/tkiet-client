import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  constructor(private router: Router) {
    //this.loadPeople();
    //comment
   }
  textValue="";
  ques = [
    {
      key : 'Where is location?',
      info : 'Warananagar',
      ent : 'location'
    },
    {
      key : 'What is Time?',
      info : '9 AM',
      ent : 'time'
    },
    {
      key : 'Where is CSE?',
      info : 'Warananagar',
      ent : 'location'
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
    console.log("Update Done");
  }

  delete(event)
  {
    this.router.navigate(['delete']);
  }

}
