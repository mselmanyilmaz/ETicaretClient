import { Component } from '@angular/core';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from '../../../services/ui/custom-toastr.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from '../../../base/base.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent extends BaseComponent{
constructor(spinner: NgxSpinnerService, private tosastrService: CustomToastrService) {
  super(spinner);
}

ngOnInit(): void {
  this.showSpinner(SpinnerType.BallScaleMultiple);
}

m() {
  this.tosastrService.message("Selman", "Succes", {
    messageType: ToastrMessageType.Success,
    position: ToastrPosition.TopLeft,
    timeOut: 3000
  });
}
}
