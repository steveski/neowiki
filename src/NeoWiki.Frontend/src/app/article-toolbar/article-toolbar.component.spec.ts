import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleToolbarComponent } from './article-toolbar.component';

describe('ArticleToolbarComponent', () => {
  let component: ArticleToolbarComponent;
  let fixture: ComponentFixture<ArticleToolbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleToolbarComponent]
    });
    fixture = TestBed.createComponent(ArticleToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
