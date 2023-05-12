import { Component, OnInit } from '@angular/core';
import { Hen } from './models/hen';
import { HensService } from './services/hens.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HenPen.UI'
  hens: Hen[] = [];


  constructor(private hensService: HensService) {}
   
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    
    this.hensService.getHens()
    .subscribe((result: Hen[]) => (this.hens = result));

    console.log(this.hens);
}
}  
    
  

