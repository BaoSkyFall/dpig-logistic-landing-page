import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicesComponent } from './services.component';
import {ServicesDetailAirFreightComponent} from "./services-detail-air-freight/services-detail-air-freight.component";
import {ServicesDetailOceanFreightComponent} from "./services-detail-ocean-freight/services-detail-ocean-freight.component";
import {ServicesDetailRoadFreightComponent} from "./services-detail-road-freight/services-detail-road-freight.component";

const routes: Routes = [
  { path: '', component: ServicesComponent },
  { path: 'air-freight', component: ServicesDetailAirFreightComponent },
  { path: 'road-freight', component: ServicesDetailRoadFreightComponent },
  { path: 'ocean-freight', component: ServicesDetailOceanFreightComponent },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
