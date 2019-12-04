import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'pf-form-filters',
  templateUrl: './form-filters.component.html',
  styleUrls: ['./form-filters.component.css']
})
export class FormFiltersComponent implements OnInit {
  searchForm = this.fb.group(
    {
      incomeLevel: [null, []]
    })

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
