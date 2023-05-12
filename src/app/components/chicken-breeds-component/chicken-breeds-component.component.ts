import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chicken-breeds-component',
  templateUrl: './chicken-breeds-component.component.html',
  styleUrls: ['./chicken-breeds-component.component.css']
})
export class ChickenBreedsComponent implements OnInit {
  breeds: any[];

  constructor(private chickenBreedsService: ChickenBreedsService) { }

  ngOnInit() {
    this.chickenBreedsService.getBreeds().subscribe(data => {
      this.breeds = data;
    });
  }
}