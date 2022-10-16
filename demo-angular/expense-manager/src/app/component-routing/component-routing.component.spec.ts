import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentRoutingComponent } from './component-routing.component';

describe('ComponentRoutingComponent', () => {
  let component: ComponentRoutingComponent;
  let fixture: ComponentFixture<ComponentRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentRoutingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
