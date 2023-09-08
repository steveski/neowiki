import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { Article } from '../models/article.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article: Article | null = null;

  constructor(private route: ActivatedRoute, private articleService: ArticleService, private userService: UserService) {}

  ngOnInit(): void {
    const articleTitle = this.route.snapshot.paramMap.get('title');

    if(articleTitle) {
      this.article = this.articleService.getArticle(articleTitle);
    }
  }


}
