import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  collegeName = 'Tatyasaheb Kore Institute of Technology and Engineering, Warananagar';
  constructor() { }

  ngOnInit() {
  }

}
