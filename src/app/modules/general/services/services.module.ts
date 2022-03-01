import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesComponent } from './services.component';
import { ServicesRoutingModule } from './services-routing.module';
import { ServicesDetailSeafreightComponent } from './services-detail-seafreight/services-detail-seafreight.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    ServicesRoutingModule,
    TranslateModule
  ],
  exports: [
    ServicesComponent
  ],
  declarations: [
    ServicesComponent,
    ServicesDetailSeafreightComponent
  ],
  providers: [
  ],
})
export class ServicesModule { }
