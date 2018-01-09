import { Component, OnInit } from '@angular/core';

import { ProductListService } from '../../shared/product-list.service';
import { StorageService } from '../../shared/storage.service';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.css']
})
export class ProductListPageComponent implements OnInit {

  constructor(public productListService: ProductListService, public storageService: StorageService) { }

  ngOnInit() {
    this.productListService.initList();
    this.storageService.initializeList();
  }

}
