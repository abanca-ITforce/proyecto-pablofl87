import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
  region$: Observable<any>;

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    const regionCode = this.activatedRoute.snapshot.params.regionCode;
    this.region$ = this.api.getRegionByCode$(regionCode);
  }
}
