import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcoureurComponent } from './newcoureur.component';

describe('NewcoureurComponent', () => {
  let component: NewcoureurComponent;
  let fixture: ComponentFixture<NewcoureurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewcoureurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewcoureurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
