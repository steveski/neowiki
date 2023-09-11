import { Injectable } from '@angular/core';
import { ArticleTemplate } from '../models/article-template';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleTemplateService {
  templates: ArticleTemplate[] = [
    { name: 'Flerf Page', template: '## Introduction\n\n\n## Papa Flerf\n\n' },
    { name: 'Redemption Page', template: '## w00t!!\n\n' }
  ];

  constructor() {}

  getTemplates(): ArticleTemplate[] {
    return this.templates;

    //return this.http.get<ArticleTemplate>('API_URL');
  }

  saveTemplate(template: ArticleTemplate): void {
    if(template) {
      const existing = this.templates.find(x => x.name === template.name);
      if(existing) {
        existing.template = template.template;
        //return this.http.put('API_URL', template);
      } else {
        this.templates.push(template);
        //return this.http.post('API_URL', template);
      }
    }
  }
}
