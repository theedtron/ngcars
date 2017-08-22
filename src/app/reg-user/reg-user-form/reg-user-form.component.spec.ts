import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegUserFormComponent } from './reg-user-form.component';

describe('RegUserFormComponent', () => {
  let component: RegUserFormComponent;
  let fixture: ComponentFixture<RegUserFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegUserFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
