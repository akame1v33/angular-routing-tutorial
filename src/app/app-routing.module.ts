import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', redirectTo:'anime', pathMatch:'full'},
  {path:'anime/:id',       component:AnimeDetailComponent},
  {path:'anime',           component:AnimeListComponent},
  {path:"**",             component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routeComponents = [
  AnimeDetailComponent,
  AnimeListComponent,
  PageNotFoundComponent
];