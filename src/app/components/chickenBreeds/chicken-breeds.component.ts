import { Component, OnInit } from '@angular/core';
import { ChickenBreedsService } from 'src/app/services/chicken-breeds.service';

@Component({
  selector: 'app-chicken-breeds.component',
  templateUrl: './chicken-breeds.component.html',
  styleUrls: ['./chicken-breeds.component.css']
})
export class ChickenBreedsComponent implements OnInit {
  breeds: any[] | undefined;

  constructor(public chickenBreedsService: ChickenBreedsService) { }

  ngOnInit() {
    this.chickenBreedsService.getBreeds().subscribe((data: any[]) => {
      this.breeds = data;
    });
  }
}