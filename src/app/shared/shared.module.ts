import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPipe } from './list.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListPipe],
  exports: [ListPipe]
})
export class SharedModule { }
