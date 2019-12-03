import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegionsComponent } from './regions.component';

// tslint:disable-next-line: max-line-length
const routes: Routes = [{ path: '', component: RegionsComponent }, { path: ':regionId', loadChildren: () => import('./region/region.module').then(m => m.RegionModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegionsRoutingModule { }
