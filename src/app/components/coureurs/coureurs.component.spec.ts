import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoureursComponent } from './coureurs.component';

describe('CoureursComponent', () => {
  let component: CoureursComponent;
  let fixture: ComponentFixture<CoureursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoureursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoureursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
