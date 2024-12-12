import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


export class BaseComponent {
  constructor(private spinner: NgxSpinnerService) {}

  showSpinner(spinnerNameType: SpinnerType) {
    this.spinner.show(spinnerNameType);

    setTimeout(() => this.hideSpinner(spinnerNameType), 5000);
  }

  hideSpinner(spinnerNameType: SpinnerType) {
    this.spinner.hide(spinnerNameType);
  }
}

export enum SpinnerType {
  BallAtom = "spinner1",
  BallScaleMultiple = "spinner2",
  BallSpinClockwiseFadeRotating = "spinner3"
}