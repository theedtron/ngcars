import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkexamleComponent } from './cdkexamle.component';

describe('CdkexamleComponent', () => {
  let component: CdkexamleComponent;
  let fixture: ComponentFixture<CdkexamleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdkexamleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkexamleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
