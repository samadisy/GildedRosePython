import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackbarService } from '../../../../@shared/pages/snackbar/snackbar.service';
import { Router } from '@angular/router';
import { ApiService } from '../../../../@core/services/api.service';

@Component({
  selector: 'app-cat-create',
  templateUrl: './cat-create.component.html',
  styleUrls: ['./cat-create.component.scss'],
})
export class CatCreateComponent implements OnInit {
  catsForm: FormGroup;
  category: object;
  constructor(
    private fb: FormBuilder,
    private snackbarService: SnackbarService,
    private router: Router,
    private apiserv: ApiService
  ) {
    this.catsForm = this.fb.group({
      inputName: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {}
  get getinput() {
    return this.catsForm.get('inputName');
  }

  onSubmit() {
    this.category = {
      name: this.catsForm.get('inputName').value,
    };
    this.apiserv
      .addRow(this.category, 'categories')
      .toPromise()
      .then((next) => {
        this.snackbarService.show('Item Created successfully', 'success');
        this.router.navigate(['categories']);
      })
      .catch((err) => {
        this.snackbarService.show(err['error']['errors']['name'], 'danger');
      });
  }
} //end of Class
