import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private router: Router) {
  }
  categories=[
    {
     category:'Admission'
    },
    {
     category:'College'
    },
    {
     category:'Department'
    },
    {
     category:'Library'
    },
    {
     category:'Event'
    }
  ];

  keywords=[
    {
      keyword:'established'
    },
    {
      keyword:'college name'
    },
    {
      keyword:'code'
    },
    {
      keyword:'chairman'
    }
  ];

 ngOnInit() {
 }

 delete(event)
 {
   
 }

 cancle(event)
 {
   this.router.navigate(['dashboard']);
 }

 clear(event)
 {
   console.log("Clear");
 }

}
