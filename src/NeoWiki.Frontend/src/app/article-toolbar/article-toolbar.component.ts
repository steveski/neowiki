import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-article-toolbar',
  templateUrl: './article-toolbar.component.html',
  styleUrls: ['./article-toolbar.component.scss']
})
export class ArticleToolbarComponent implements OnInit {
  isUserAuthenticated = false;
  isEditAllowed = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.isUserAuthenticated = this.userService.isUserAuthenticated();

    const permissions = this.userService.getUserPermissions();
    this.isEditAllowed = permissions.includes('edit_article');

  }

}
