import { Component } from '@angular/core';
import { AlertifyService, MessageType, Position } from '../../../services/admin/alertify.service';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent extends BaseComponent {

  constructor(private alertify : AlertifyService, spinner: NgxSpinnerService){
super(spinner);
  }

  ngOnInit() : void {
    this.showSpinner(SpinnerType.BallScaleMultiple);
  }

  m() {
    this.alertify.message("Merhaba", {messageType: MessageType.Warning, position: Position.TopLeft, delay: 6, dismissOthers: false});
  }

  d() {
    this.alertify.dismiss();
  }
}
