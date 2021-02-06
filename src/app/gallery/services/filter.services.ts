import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class FilterService {
  private filterForm: FormGroup = new FormGroup({
     genre: new FormControl(),
     sort: new FormControl(),
   });

  public getControl(controlName: string): AbstractControl{
      return this.filterForm.controls[controlName];
  }

  public getFilterForm(): FormGroup{
    return this.filterForm;
  }
}
