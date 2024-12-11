import { Component } from '@angular/core';
import { AlertifyService, MessageType, Position } from '../../../services/admin/alertify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private alertify : AlertifyService){

  }

  ngOnInit() : void {

  }

  m() {
    this.alertify.message("Merhaba", {messageType: MessageType.Warning, position: Position.TopLeft, delay: 6, dismissOthers: false});
  }

  d() {
    this.alertify.dismiss();
  }
}
