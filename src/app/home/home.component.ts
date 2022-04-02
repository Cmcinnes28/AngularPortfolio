import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {

  Name = "Cameron McInnes"
  
  constructor(private router:Router) { }
  
  navigateProjects(){
    this.router.navigateByUrl('/Projects')
  }

  ngOnInit(): void {
    
  }

}
