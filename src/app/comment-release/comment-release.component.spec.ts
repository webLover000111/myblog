import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentReleaseComponent } from './comment-release.component';

describe('CommentReleaseComponent', () => {
  let component: CommentReleaseComponent;
  let fixture: ComponentFixture<CommentReleaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentReleaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
