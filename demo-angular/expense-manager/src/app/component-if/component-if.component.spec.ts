import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentIfComponent } from './component-if.component';

describe('ComponentIfComponent', () => {
  let component: ComponentIfComponent;
  let fixture: ComponentFixture<ComponentIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentIfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
