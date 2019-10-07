import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndsectionComponent } from './endsection.component';

describe('EndsectionComponent', () => {
  let component: EndsectionComponent;
  let fixture: ComponentFixture<EndsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
