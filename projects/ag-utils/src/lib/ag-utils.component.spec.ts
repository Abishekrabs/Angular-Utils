import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgUtilsComponent } from './ag-utils.component';

describe('AgUtilsComponent', () => {
  let component: AgUtilsComponent;
  let fixture: ComponentFixture<AgUtilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgUtilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
