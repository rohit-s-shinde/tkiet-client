import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//var $http = require('request');
import { Http } from '@angular/http';
@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {
  selectedOption: string;
  constructor(private router: Router, private http : Http) {
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

  /* public post(data: string) {
    return this.http.post('http://localhost:3000/client/addnew',JSON.stringify({data: data}));
  }*/
  ngOnInit() {
  }

  add(event)
  {
    //const corporationObj = this.corporation.value;
    const entity = ((document.getElementById('ent') as HTMLInputElement).value);
    const info = ((document.getElementById('info') as HTMLInputElement).value);
    const keyword = ((document.getElementById('key') as HTMLInputElement).value);
    console.log(entity+info+keyword);
    const cat = this.selectedOption;
    var Indata = [
            {
                "entity": entity
            },
            {
                "info": info
            },
            {
                "keyword": keyword            
            },
            {
                "cat": cat
            }            
        ];
        return this.http.post('http://localhost:3000/client/addnew',JSON.stringify({data: Indata}));
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
