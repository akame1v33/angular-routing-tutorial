import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:'', redirectTo:'/test', pathMatch:'full'},
  {path:'test',            component:TestComponent},
  {path:'anime/:id',       component:AnimeDetailComponent,  canActivate:[AuthGuard] },
  {path:'anime',           component:AnimeListComponent},
  {path:"**",              component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routeComponents = [
  AnimeDetailComponent,
  AnimeListComponent,
  PageNotFoundComponent,
  TestComponent
];