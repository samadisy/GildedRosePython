import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedRoutingModule } from './shared-routing.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { ConfirmDialogComponent } from './pages/dialogs/confirm-dialog/confirm-dialog.component';
import { ConfirmDialogService } from './pages/dialogs/confirm-dialog/confirm.service';
import { SnackbarComponent } from './pages/snackbar/snackbar.component';
import { ImgDefualtPipe } from './pipes/img-defualt.pipe';
import { TopbarComponent } from './layouts/topbar/topbar.component';
@NgModule({
  declarations: [
    NotFoundComponent,
    FilterPipePipe,
    ConfirmDialogComponent,
    SnackbarComponent,
    ImgDefualtPipe,
    TopbarComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MaterialModule,
    NotFoundComponent,
    FilterPipePipe,
    ConfirmDialogComponent,
    SnackbarComponent,
    TopbarComponent,
    ImgDefualtPipe,
  ],
  providers: [ConfirmDialogService],
})
export class SharedModule {}
