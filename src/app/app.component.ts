import { Component } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cameron-McInnes-Client';
  pagelinks!: string;

  constructor(private router: Router){}

    AppComponent(){
      this.pagelinks = 'btn-default';
    }
    navigateAbout(){
      this.router.navigateByUrl('/About')
    }
    navigateContact(){
      this.router.navigateByUrl('/Contact')
    }
    navigateProjects(){
      this.router.navigateByUrl('/Projects')
    }
    navigateHome(){
      this.router.navigateByUrl('/Home')
    }
    FocusButton(buttonId:any){
      this.pagelinks = 'btn-change';
    
    }
    
    

}
