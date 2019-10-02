import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltloginComponent } from './altlogin.component';

describe('AltloginComponent', () => {
  let component: AltloginComponent;
  let fixture: ComponentFixture<AltloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
