import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  // Mock data
  private articles: Article[] = [
    {
      id: '4beb7311-55e8-47f6-8e39-8325b1c91f35',
      title: 'Sydney',
      content: 'Sydney is the state capital of New South Wales and the most populous city in Australia.'
    },
    {
      id: '1df4021b-d8c1-42f8-b440-3818bc85a038',
      title: 'Canberra',
      content: 'Canberra is the capital city of Australia. It is Australia\'s largest inland city.'
    },
    {
      id: 'e2a1fbaf-0951-4392-9ee1-609bb46a88c8',
      title: 'Melbourne',
      content: 'Melbourne is the coastal capital of the southeastern Australian state of Victoria.'
    },
    {
      id: '',
      title: 'CC',
      content: '= Basics =\n== Alias ==\nChris from Westchester County\n\n== Papa Flerf ==\nxxxx\n\n== Media of choice ==\n[xxxx YouTube]\n\n== Location on Globe ==\nNew York, Westchester Country\n\n= Details =\nA Flerf who has gained notoriety or his kitchen videos which included his wife telling him off for talking "about his nonsense".\n\nAmongst his many claims:\n* The sun is a projection\n* the earth has a dome over it\n* we can see further than we should\n'
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

  saveArticle(article: Article) {
    this.articles.push(article);

    // if(!article.id)
    // {
    //   this.httpClient.post<Article>(`YOUR_API_URL/articles/${title}`);
    // } else {
    //   this.httpClient.get<Article>(`YOUR_API_URL/articles/${title}`);
    // }
  }

}
