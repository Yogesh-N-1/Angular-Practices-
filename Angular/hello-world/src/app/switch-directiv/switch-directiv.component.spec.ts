import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchDirectivComponent } from './switch-directiv.component';

describe('SwitchDirectivComponent', () => {
  let component: SwitchDirectivComponent;
  let fixture: ComponentFixture<SwitchDirectivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchDirectivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchDirectivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
