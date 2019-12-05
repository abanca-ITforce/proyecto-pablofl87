import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  countries$: Observable<any[]>;
  incomes: any[];
  incomeLevels$: Observable<any[]>;
  lendingTypes$: Observable<any>;

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.countries$ = this.api.getCountriesByFilters(this.incomes);
    this.incomeLevels$ = this.api.getIncomeLevels$();
    this.lendingTypes$ = this.api.getLendingTypes$();
  }
  onFilter(filter) {
    this.countries$ = this.api.getCountriesByFilter(filter);
  }


}
