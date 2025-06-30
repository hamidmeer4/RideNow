import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

@NgModule({
  exports: [
    ButtonModule,
    TableModule,
    ToastModule,
  ]
})
export class PrimengModule { }
