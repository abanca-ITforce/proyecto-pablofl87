import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'pf-form-filters',
  templateUrl: './form-filters.component.html',
  styleUrls: ['./form-filters.component.css']
})
export class FormFiltersComponent implements OnInit {
  filterForm: FormGroup;

  @Input() incomeLevels: any[];
  @Input() lendingTypes: any[];
  @Output() filter = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.filterForm = this.fb.group({
       incomeLevel: '' ,
       lendingType: ''
    });
  }

  onSubmit() {
    const filter = this.filterForm.value;
    this.filter.emit(filter);
  }
}
