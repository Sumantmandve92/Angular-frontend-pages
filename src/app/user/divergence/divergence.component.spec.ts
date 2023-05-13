import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivergenceComponent } from './divergence.component';

describe('DivergenceComponent', () => {
  let component: DivergenceComponent;
  let fixture: ComponentFixture<DivergenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivergenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivergenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
