import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {
  regions$: Observable<any>;

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.regions$ = this.api.getAllRegions$();
  }

}
