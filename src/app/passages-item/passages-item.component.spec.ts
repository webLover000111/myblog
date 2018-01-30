import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassagesItemComponent } from './passages-item.component';

describe('PassagesItemComponent', () => {
  let component: PassagesItemComponent;
  let fixture: ComponentFixture<PassagesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassagesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassagesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
