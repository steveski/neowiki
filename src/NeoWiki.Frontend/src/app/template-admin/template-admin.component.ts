import { Component, OnInit } from '@angular/core';
import { ArticleTemplateService } from '../services/article-template.service';
import { ArticleTemplate } from '../models/article-template';

@Component({
  selector: 'app-template-admin',
  templateUrl: './template-admin.component.html',
  styleUrls: ['./template-admin.component.scss']
})
export class TemplateAdminComponent implements OnInit {
  selectedTemplate!: ArticleTemplate;
  templates: ArticleTemplate[] | null = null;
  isDisplayExistingMode = false;
  isEditMode = false;
  isPreviewMode = false;

  constructor(private templateService: ArticleTemplateService) {}

  ngOnInit() {
    this.templates = this.templateService.getTemplates();
  }

  selectTemplate(template: ArticleTemplate) {
    this.selectedTemplate = template;
    this.isEditMode = true;
  }

  togglePreview() {
    this.isPreviewMode = !this.isPreviewMode;
  }

  saveChanges() {
    if(this.selectedTemplate) {
      this.templateService.saveTemplate(this.selectedTemplate);
      this.isEditMode = false;
      this.isPreviewMode = false;
    }
  }

  cancelChanges() {
    const confirmation = window.confirm('Are you sure you want to cancel?');
    if (confirmation) {
      this.isEditMode = false;
      this.isPreviewMode = false;
    }
  }

  editTemplate() {
    this.isEditMode = true;
  }

  createNewTemplate() {
    this.selectedTemplate = { name: '', template: '' };
    this.isEditMode = true;
  }

}
