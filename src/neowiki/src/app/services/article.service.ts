import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  // Mock data
  private articles: Article[] = [
    {
      id: 1,
      title: 'Sydney',
      content: 'Sydney is the state capital of New South Wales and the most populous city in Australia.'
    },
    {
      id: 2,
      title: 'Canberra',
      content: 'Canberra is the capital city of Australia. It is Australia\'s largest inland city.'
    },
    {
      id: 3,
      title: 'Melbourne',
      content: 'Melbourne is the coastal capital of the southeastern Australian state of Victoria.'
    }
  ];


  constructor() {}

  getArticle(title: string): Article | null {
    // Mock data for now
    const article = this.articles.find(x => x.title.toLowerCase() === title.toLowerCase());
    if(article)
      return article;

    return null;

    // Uncomment when the REST API is implemented
    // return this.httpClient.get<Article>(`YOUR_API_URL/articles/${title}`);
  }

}
