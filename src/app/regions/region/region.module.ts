import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegionRoutingModule } from './region-routing.module';
import { RegionComponent } from './region.component';
import { RegionCardComponent } from './region-card/region-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [RegionComponent, RegionCardComponent],
  imports: [CommonModule, RegionRoutingModule, MatCardModule,MatListModule, SharedModule]
})
export class RegionModule {}
