import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortfilesComponent } from './sortfiles.component';

describe('SortfilesComponent', () => {
  let component: SortfilesComponent;
  let fixture: ComponentFixture<SortfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
