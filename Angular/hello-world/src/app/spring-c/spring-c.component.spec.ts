import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringCComponent } from './spring-c.component';

describe('SpringCComponent', () => {
  let component: SpringCComponent;
  let fixture: ComponentFixture<SpringCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
