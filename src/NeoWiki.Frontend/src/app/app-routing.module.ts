import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { TemplateAdminComponent } from './template-admin/template-admin.component';
import { adminGuard } from './guards/admin.guard';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { ArticleComponent } from './article/article.component';
import { privilegedGuard } from './guards/privileged.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent, canActivate: [adminGuard]},
  { path: 'admin/templates', component: TemplateAdminComponent, canActivate: [privilegedGuard]},
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: 'article/:title', component: ArticleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
