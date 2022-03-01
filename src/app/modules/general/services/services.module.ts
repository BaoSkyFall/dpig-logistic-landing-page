import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesComponent } from './services.component';
import { ServicesRoutingModule } from './services-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import {CarouselModule} from "ngx-owl-carousel-o";
import {ServicesDetailAirFreightComponent} from "./services-detail-air-freight/services-detail-air-freight.component";
import {ServicesDetailOceanFreightComponent} from "./services-detail-ocean-freight/services-detail-ocean-freight.component";
import {ServicesDetailRoadFreightComponent} from "./services-detail-road-freight/services-detail-road-freight.component";

@NgModule({
  imports: [
    CommonModule,
    ServicesRoutingModule,
    TranslateModule,
    CarouselModule
  ],
  exports: [
    ServicesComponent
  ],
  declarations: [
    ServicesComponent,
    ServicesDetailAirFreightComponent,
    ServicesDetailOceanFreightComponent,
    ServicesDetailRoadFreightComponent
  ],
  providers: [
  ],
})
export class ServicesModule { }
