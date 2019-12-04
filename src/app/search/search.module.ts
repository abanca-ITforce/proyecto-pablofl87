import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { FormFiltersComponent } from './form-filters/form-filters.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [SearchComponent, FormFiltersComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    MatListModule,
    MatCardModule,
    SharedModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class SearchModule { }
