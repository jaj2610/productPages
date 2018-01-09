import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/share';

import { Product } from './product';
import { ProductList } from './product-list.interface';
import { testData } from './test-data';

@Injectable()
export class StorageService implements OnDestroy {
  private key = 'productList';

  private storedList: Subject<ProductList> = new Subject<ProductList>();

  constructor() {
    window.addEventListener('storage', this.handleStorageUpdate);
  }

  public initializeList() {
    if (!JSON.parse(localStorage.getItem(this.key))) {
      this.fillDefaultData();
    }

    let localList = JSON.parse(localStorage.getItem(this.key));

    if (localList) {
      this.setStoredList(localList);
    }
  }

  private setStoredList(newList: ProductList) {
    this.storedList.next(newList);
    console.log("list stored", newList);
  }

  public setStorage(newList: ProductList) {
    console.log("New list, update local storage");
    if (typeof (Storage) !== undefined) {
      localStorage.setItem(this.key, JSON.stringify(newList));
    }
  }

  public getList(): Observable<ProductList> {
    console.log("Grab list from local storage");
    if (typeof (Storage) !== undefined) {
      this.storedList.next(JSON.parse(localStorage.getItem(this.key)));
    }
    return this.storedList.asObservable().share(); // grab local storage and return
  }

  private clearList() {
    localStorage.removeItem(this.key);
  }

  public fillDefaultData() {
    console.log("Updating local storage with test data");
    this.clearList();
    this.setStorage(testData);
    this.setStoredList(testData);
  }

  private handleStorageUpdate(event: StorageEvent) {
        if (event.key === this.key) {
            this.setStoredList(JSON.parse(event.newValue));
        } else {
            // console.log('No new list');
        }
        // console.log(event);
    }

  ngOnDestroy() {
    window.removeEventListener('storage', this.handleStorageUpdate);
    this.storedList.complete();
  }

}
