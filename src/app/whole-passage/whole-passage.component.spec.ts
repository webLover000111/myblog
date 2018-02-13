import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholePassageComponent } from './whole-passage.component';

describe('WholePassageComponent', () => {
  let component: WholePassageComponent;
  let fixture: ComponentFixture<WholePassageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholePassageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholePassageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
