import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MaterialModule } from '../../../app/@shared/material/material.module';
import { SharedModule } from '../../@shared/shared.module';
import { ItemsRoutingModule } from './items-routing.module';
import { ItemsCreateComponent } from './pages/items-create/items-create.component';
import { ItemsUpdateComponent } from './pages/items-update/items-update.component';
import { ItemsListComponent } from './pages/items-list/items-list.component';
import { ItemDetailsComponent } from './pages/item-details/item-details.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    ItemsCreateComponent,
    ItemsUpdateComponent,
    ItemsListComponent,
    ItemDetailsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ItemsRoutingModule,
  ],
  exports: [],
  providers: [
    DatePipe,
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { floatLabel: 'always' },
    },
  ],
})
export class ItemsModule {}
