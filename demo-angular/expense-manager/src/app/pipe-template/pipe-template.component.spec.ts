import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeTemplateComponent } from './pipe-template.component';

describe('PipeTemplateComponent', () => {
  let component: PipeTemplateComponent;
  let fixture: ComponentFixture<PipeTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
