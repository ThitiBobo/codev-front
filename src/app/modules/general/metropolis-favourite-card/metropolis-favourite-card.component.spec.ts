import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetropolisFavouriteCardComponent } from './metropolis-favourite-card.component';

describe('MetropolisFavouriteCardComponent', () => {
  let component: MetropolisFavouriteCardComponent;
  let fixture: ComponentFixture<MetropolisFavouriteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetropolisFavouriteCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetropolisFavouriteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
