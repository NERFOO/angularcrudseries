import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepersonajeComponent } from './updatepersonaje.component';

describe('UpdatepersonajeComponent', () => {
  let component: UpdatepersonajeComponent;
  let fixture: ComponentFixture<UpdatepersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatepersonajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatepersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
