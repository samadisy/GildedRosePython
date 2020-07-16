import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { SnackbarService } from '../../../../@shared/pages/snackbar/snackbar.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../../@core/services/api.service';
import { Category } from '../../../../@shared/models/category';
import { ConfirmDialogService } from '../../../../@shared/pages/dialogs/confirm-dialog/confirm.service';
import { DatePipe } from '@angular/common';
import { Subscription, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-items-create',
  templateUrl: './items-create.component.html',
  styleUrls: ['./items-create.component.scss'],
})
export class ItemsCreateComponent implements OnInit, OnDestroy {
  images = [];
  itemsForm: FormGroup;
  categories: Category[] = [];
  subCategories: [] = [];
  data: {};
  isLoadingResults = true;
  isLoadingImages = false;
  options = {
    title: 'Are Sure To Submit This Part  ',
    message:
      'Because in case to Continue you will not be able to update them in this time',
    cancelText: 'Cancel And Review this Data',
    confirmText: 'Confirm And Continue',
  };
  date = new Date(2020, 1, 1);
  minDate = new Date(2000, 0, 1);
  maxDate = new Date();
  filteredOptions;

  /****************** constructor Function************************/
  constructor(
    private fb: FormBuilder,
    private snackbarService: SnackbarService,
    private dialogService: ConfirmDialogService,
    public datepipe: DatePipe,
    private router: Router,
    private apiserv: ApiService,
    private actRoute: ActivatedRoute,
    private http: HttpClient
  ) {}

  /****************** ngOnInit Function************************/
  ngOnInit(): void {
    this.actRoute.data.subscribe((res) => {
      this.categories = res['item']['data'];
    });
    this.itemsForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      itemCategory: ['', [Validators.required]],

      expiration_date: ['', [Validators.required]],

      date: ['', [Validators.required]],
    });
    this.isLoadingResults = false;
  } //end of ngOnInit

  /****************** Submit Function************************/
  onSubmit() {
    let newDate = this.itemsForm.get('date').value;
    newDate = this.datepipe.transform(newDate, 'yyyy-MM-dd');

    this.data = {
      name: this.itemsForm.get('name').value,
      category_id: this.itemsForm.get('itemCategory').value,
      is_found: this.itemsForm.get('is_found').value,
      date: newDate,
    };
    // console.log('  this.data', this.data);
    this.dialogService.open(this.options);
    this.dialogService.confirmed().subscribe((confirmed) => {
      if (confirmed) {
        this.isLoadingResults = true;
        this.apiserv
          .addRow(this.data, 'items')
          .toPromise()
          .then((next) => {
            this.isLoadingResults = false;
            this.snackbarService.show('Item Created successfully', 'success');
            this.router.navigate(['home']);
          })
          .catch((err) => {
            console.log('err :', err);
            this.isLoadingResults = false;
            this.snackbarService.show(err['error']['errors']['name'], 'danger');
          });
      }
    });
  } //end of submit

  /****************** DEstroy Function************************/
  ngOnDestroy(): void {} //end of destroy
} //end of Class
