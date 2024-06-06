import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const priceRangeValidator: ValidatorFn = (
  formGroup: AbstractControl
): ValidationErrors | null => {
  const minPrice = formGroup.get('minPrice')?.value;
  const maxPrice = formGroup.get('maxPrice')?.value;

  return minPrice != null && maxPrice != null && minPrice >= maxPrice
    ? { priceRangeInvalid: true }
    : null;
};
