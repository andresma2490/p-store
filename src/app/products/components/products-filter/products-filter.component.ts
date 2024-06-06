import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Category } from '../../models/category';
import { PriceForm } from '../../models/utils';
import { priceRangeValidator } from '../../validators/price-range';

@Component({
  selector: 'app-products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.scss']
})
export class ProductsFilterComponent {
  @Input() categories!: Category[];
  @Output() categorySelected = new EventEmitter<Category | null>();
  @Output() priceApplied = new EventEmitter<PriceForm>();

  priceForm = new FormGroup(
    {
      minPrice: new FormControl(0, [Validators.required]),
      maxPrice: new FormControl(10000, [Validators.required])
    },
    { validators: priceRangeValidator }
  );

  emitPrices() {
    if (this.priceForm.valid) {
      this.priceApplied.emit(this.priceForm.getRawValue() as PriceForm);
    }
  }
}
