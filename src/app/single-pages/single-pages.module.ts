import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SinglePagesRoutingModule } from './single-pages-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    SinglePagesRoutingModule
  ],
  declarations: [HomeComponent]
})
export class SinglePagesModule { }
