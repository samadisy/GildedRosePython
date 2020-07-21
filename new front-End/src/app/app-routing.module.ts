import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './@shared/pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    // canActivate: [AuthGuard],
  },

  {
    path: 'home',
    loadChildren: () =>
      import('../app/modules/home/home.module').then((m) => m.HomeModule),
    // canActivate: [AuthGuard],
  },
  {
    path: 'items',
    loadChildren: () =>
      import('../app/modules/items/items.module').then((m) => m.ItemsModule),
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('../app/modules/categories/categories.module').then(
        (m) => m.CategoriesModule
      ),
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
