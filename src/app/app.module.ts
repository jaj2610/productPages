import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

import { ProductListService } from './shared/product-list.service';
import { StorageService } from './shared/storage.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    SharedModule
  ],
  providers: [
    ProductListService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
