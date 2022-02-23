import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkersComponent } from './workers.component';
import { WorkersRoutingModule } from './workers-routing.module';

@NgModule({
  imports: [
    CommonModule,
    WorkersRoutingModule
  ],
  exports: [
    WorkersComponent
  ],
  declarations: [
    WorkersComponent
  ],
  providers: [
  ],
})
export class WorkersModule { }
