import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonInoComponent } from './person-ino.component';

describe('PersonInoComponent', () => {
  let component: PersonInoComponent;
  let fixture: ComponentFixture<PersonInoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonInoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonInoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
