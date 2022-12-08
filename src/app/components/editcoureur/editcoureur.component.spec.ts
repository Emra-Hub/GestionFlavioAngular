import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcoureurComponent } from './editcoureur.component';

describe('EditcoureurComponent', () => {
  let component: EditcoureurComponent;
  let fixture: ComponentFixture<EditcoureurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcoureurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditcoureurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
