import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListPageComponent } from './product-list-page/product-list-page.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductComponent } from './product-list-page/product/product.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ProductDetailComponent, ProductListPageComponent, ProductEditComponent, ProductComponent],
  exports: [
    ProductDetailComponent, ProductListPageComponent, ProductEditComponent
  ]
})
export class PagesModule { }
