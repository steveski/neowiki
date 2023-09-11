import { TestBed } from '@angular/core/testing';

import { ArticleTemplateService } from './article-template.service';

describe('ArticleTemplateService', () => {
  let service: ArticleTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
