import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassageListComponent } from './passage-list.component';

describe('PassageListComponent', () => {
  let component: PassageListComponent;
  let fixture: ComponentFixture<PassageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
