import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
    });

    @Input() incomes;

  constructor(private fb: FormBuilder) { }
  @Output() searchFilters = new EventEmitter<any>();

  ngOnInit() {
  }

  onSubmit() {
    this.searchFilters.emit(this.searchForm.value);
  }

}
