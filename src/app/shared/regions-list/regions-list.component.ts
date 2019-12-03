import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pf-regions-list',
  templateUrl: './regions-list.component.html',
  styleUrls: ['./regions-list.component.css']
})
export class RegionsListComponent implements OnInit {
  @Input() regions: any[];

  constructor() {}

  ngOnInit() {
  }

}
