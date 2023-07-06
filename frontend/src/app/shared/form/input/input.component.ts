import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  template: `
  <div class="form-group" [formGroup]='formGroup'>
  <label for="controlName" [class]='labelClass'>{{label}}</label>
    <input  [type]="type"  [class]="className" [formControlName]="controlName"
    [class.is-valid]="controller.valid"  [class.is-invalid]="controller.invalid&&controller.touched"
    />

    <div *ngIf="controller.invalid&&controller.touched">
					<small *ngIf="controller.errors?.['required']" class="text-danger"></small>
					<small *ngIf="controller.errors?.['email']" class="text-danger"></small>
				  </div>
    </div>
  `,
  styles: [
  ]
})
export class InputComponent implements OnInit {

  constructor() { }

 @Input() type: string ;
 @Input() className: string;
 @Input() controller: AbstractControl;
 @Input() controlName: string;
 @Input() formGroup: FormGroup;
@Input() label: string ;
@Input() errorMgs1: string ;
@Input() errorMgs2: string ;
@Input() labelClass: string ;

 ngOnInit(): void {
   console.log('formGroup', this.formGroup);
  }



}
