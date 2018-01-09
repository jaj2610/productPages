import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { StorageService } from './storage.service';

import { Product } from './product';
import { ProductList } from './product-list.interface';

@Injectable()
export class ProductListService implements OnDestroy {
  public _productList: ProductList = {};
  private subscription: Subscription;

  constructor(private storageService: StorageService) {
  }

  initList() {
    console.log("init");
    this.subscription = this.storageService.getList().subscribe(data => { this._productList = data; this.haveData() }, error => console.log(error));
  }

  private haveData() {
    console.log("Data acquired", this._productList);
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
