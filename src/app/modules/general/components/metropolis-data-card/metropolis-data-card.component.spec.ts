import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetropolisDataCardComponent } from './metropolis-data-card.component';

describe('MetropolisDataCardComponent', () => {
  let component: MetropolisDataCardComponent;
  let fixture: ComponentFixture<MetropolisDataCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetropolisDataCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetropolisDataCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
