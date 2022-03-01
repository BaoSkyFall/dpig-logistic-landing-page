import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicesComponent } from './services.component';
import {ServicesDetailSeafreightComponent} from "./services-detail-seafreight/services-detail-seafreight.component";

const routes: Routes = [
  { path: '', component: ServicesComponent },
  { path: 'sea-freight', component: ServicesDetailSeafreightComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
