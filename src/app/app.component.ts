// import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
import { MessageType } from './services/admin/alertify.service';
declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ETicaretClient';

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private toastrService: CustomToastrService) {
    // tosastrService.message("Selman", "Succes", {
    //   messageType: ToastrMessageType.Success,
    //   position: ToastrPosition.TopLeft,
    //   timeOut: 3000
    // });
    // tosastrService.message("Selman", "Error", {
    //   messageType: ToastrMessageType.Error, 
    //   position: ToastrPosition.BottomFullWidth,
    //   timeOut: 3000
    // });
    // tosastrService.message("Selman", "Info",{
    //   messageType: ToastrMessageType.Info,
    //   position: ToastrPosition.TopCenter,
    //   timeOut: 3000
    // });
    // tosastrService.message("Selman", "Warning", {
    //   messageType: ToastrMessageType.Warning,
    //   position: ToastrPosition.TopRight,
    //   timeOut: 3000
    // });

    // if (isPlatformBrowser(this.platformId)) {
    //   $(document).ready(() => {
    //     alert("Merhaba");
    //   });
    // }

    // if (isPlatformBrowser(this.platformId)){
    //   $.get("https://localhost:7273/api/Products", data =>
    //   console.log(data))
    //   }
  }
}



// $(document).ready(() => {
//   alert("Merhaba")
// })

