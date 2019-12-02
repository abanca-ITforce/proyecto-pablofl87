import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreService } from 'src/app/store.service';

@Component({
  selector: 'pf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  countriesList$: Observable<any[]>;

  constructor(private storeService: StoreService) {
    this.countriesList$ = this.storeService.getAllCountries$();
  }

  ngOnInit() {
  }

}
