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

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.countries$ = this.api.getCountriesByFilters(searchFilters);
    this.incomes = this.api.getIncomes();
  }

}
