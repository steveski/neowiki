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

  isAddAllowed = false;
  isEditAllowed = false;
  isDeleteAllowed = false;

  constructor(private route: ActivatedRoute, private articleService: ArticleService, private userService: UserService) {}

  ngOnInit(): void {
    const token = localStorage.getItem('access_token');
    if(token){
      const permissions = this.userService.getUserPermissions();

      this.isAddAllowed = permissions.includes('add_article');
      this.isEditAllowed = permissions.includes('edit_article');
      this.isDeleteAllowed = permissions.includes('delete_article');
    }


    const articleTitle = this.route.snapshot.paramMap.get('title');

    if(articleTitle) {
      this.article = this.articleService.getArticle(articleTitle);
    }
  }


}
