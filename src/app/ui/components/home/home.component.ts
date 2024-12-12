import { Component } from '@angular/core';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from '../../../services/ui/custom-toastr.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
constructor(private tosastrService: CustomToastrService) {}

m() {
  this.tosastrService.message("Selman", "Succes", {
    messageType: ToastrMessageType.Success,
    position: ToastrPosition.TopLeft,
    timeOut: 3000
  });
}
}
