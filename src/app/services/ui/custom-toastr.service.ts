import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MessageType } from '../admin/alertify.service';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {

  constructor(private toastr: ToastrService) { }

  message(message: string, title: string, toasterOptions: Partial<ToastrOptions>) {
    this.toastr[toasterOptions.messageType](message, title, {
      timeOut: toasterOptions.timeOut,
      extendedTimeOut: 1000,
      positionClass: toasterOptions.position,
      closeButton: true,
      progressBar: true,
      disableTimeOut: false
    });
  }

  
}

export class ToastrOptions {
  messageType: ToastrMessageType;
  position: ToastrPosition;
  timeOut?: number;
}

export enum ToastrMessageType {
  Success = "success",
  Warning = "warning",
  Info = "info",
  Error = "error"
}

export enum ToastrPosition {
  TopRight = "toast-top-right",
  BottomRight = "toast-bottom-right",
  BottomLeft = "toast-bottom-left",
  TopLeft = "toast-top-left",
  TopFullWidth = "toast-bottom-full-width",
  BottomFullWidth = "toast-bottom-full-width",
  TopCenter = "toast-top-center",
  BottomCenter = "toast-bottom-center" 
}