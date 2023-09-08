import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article: Article | null = null;
  isEditMode = false;
  isPreviewMode = false;
  editedContent: string | null = null; // to hold the content temporarily

  constructor(private route: ActivatedRoute, private articleService: ArticleService) {}

  ngOnInit(): void {
    const articleTitle = this.route.snapshot.paramMap.get('title');

    if(articleTitle) {
      this.article = this.articleService.getArticle(articleTitle);
      if(this.article) {
        if(!this.article?.displayName)
          this.article.displayName = articleTitle?.replace(/_/g, ' ');
      }
    }

    // Create new empty article
    if(!this.article) {
      this.isEditMode = true;
      this.article = {
        id: null,
        title: articleTitle,
        displayName: articleTitle?.replace(/_/g, ' '),
        content: ''
      } as Article;
    }
  }

  togglePreview(): void {
    this.isPreviewMode = !this.isPreviewMode;
    this.editedContent = this.article?.content ?? null;
  }

  saveChanges(): void {
    if(this.article)
      this.articleService.saveArticle(this.article);

    this.isEditMode = false;
    this.isPreviewMode = false;
  }

  cancelChanges(): void {
    const confirmation = window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')
    if(confirmation) {
      this.isEditMode = false;
      this.isPreviewMode = false;
      if(this.article?.id === null) {
        this.article = null;
      }
    }
  }

}
