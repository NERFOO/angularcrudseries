import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostpersonajeComponent } from './postpersonaje.component';

describe('PostpersonajeComponent', () => {
  let component: PostpersonajeComponent;
  let fixture: ComponentFixture<PostpersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostpersonajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostpersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
