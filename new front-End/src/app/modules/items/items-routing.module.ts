import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemsCreateComponent } from './pages/items-create/items-create.component';
import { ItemsListComponent } from './pages/items-list/items-list.component';
import { ItemsUpdateComponent } from './pages/items-update/items-update.component';
import { ItemDetailsComponent } from './pages/item-details/item-details.component';
import { AllCategoriesResolver } from 'src/app/@core/resolvers/allCats.resolver';
import { ItemUpdateResolver } from 'src/app/@core/resolvers/ItemsResolvers/item-update.resolver';
import { NotFoundComponent } from 'src/app/@shared/pages/not-found/not-found.component';
import { ItemDetailsResolver } from 'src/app/@core/resolvers/ItemsResolvers/item-details.resolver';

const routes: Routes = [
  {
    path: '',
    component: ItemsListComponent,
  },
  {
    path: 'view/:id',
    component: ItemDetailsComponent,
    // resolve: { item: ItemDetailsResolver },
  },
  {
    path: 'create',
    component: ItemsCreateComponent,
    // resolve: { item: AllCategoriesResolver },
  },

  {
    path: 'update/:id',
    component: ItemsUpdateComponent,
    // resolve: { item: ItemUpdateResolver },
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemsRoutingModule {}
