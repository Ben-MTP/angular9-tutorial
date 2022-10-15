import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingWayComponent } from './binding-way.component';

describe('BindingWayComponent', () => {
  let component: BindingWayComponent;
  let fixture: ComponentFixture<BindingWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindingWayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindingWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
