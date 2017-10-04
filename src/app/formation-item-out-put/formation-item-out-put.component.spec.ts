import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationItemOutPutComponent } from './formation-item-out-put.component';

describe('FormationItemOutPutComponent', () => {
  let component: FormationItemOutPutComponent;
  let fixture: ComponentFixture<FormationItemOutPutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationItemOutPutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationItemOutPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
