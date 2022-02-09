import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetropolisDataHistoryComponent } from './metropolis-data-history.component';

describe('MetropolisDataHistoryComponent', () => {
  let component: MetropolisDataHistoryComponent;
  let fixture: ComponentFixture<MetropolisDataHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetropolisDataHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetropolisDataHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
