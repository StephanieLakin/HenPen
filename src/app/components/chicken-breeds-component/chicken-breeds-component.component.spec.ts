import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChickenBreedsComponentComponent } from './chicken-breeds-component.component';

describe('ChickenBreedsComponentComponent', () => {
  let component: ChickenBreedsComponentComponent;
  let fixture: ComponentFixture<ChickenBreedsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChickenBreedsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChickenBreedsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
