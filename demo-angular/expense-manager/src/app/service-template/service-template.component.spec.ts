import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTemplateComponent } from './service-template.component';

describe('ServiceTemplateComponent', () => {
  let component: ServiceTemplateComponent;
  let fixture: ComponentFixture<ServiceTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
