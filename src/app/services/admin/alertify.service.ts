import { Injectable } from '@angular/core';
declare var alertify: any 

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  // message(message: string, messageType: MessageType, position: Position, delay : number = 3, dismissOthers : boolean = false) {
    message(message : string, options : Partial<AlertifyOptions>) {
    alertify.set('notifier', 'delay', options.delay);
    alertify.set('notifier', 'position', options.position);
    const messageCnst =  alertify[options.messageType](message);

    if(options.dismissOthers) {
      messageCnst.dismissOthers();
    }
  }

  dismiss() {
    alertify.dismissAll();
  }
}

export class AlertifyOptions {
  messageType : MessageType = MessageType.Message;
  position : Position = Position.TopLeft;
  delay : number = 3;
  dismissOthers : boolean = false;
}

export enum MessageType {
  Error = "error",
  Message = "message",
  Notify = "notify",
  Success = "success",
  Warning = "warning"
}

export enum Position {
  TopRight =  "top-right",
  TopCenter = "top-center",
  TopLeft = "top-left",
  BottomCenter = "bottom-center",
  BottomLeft = "bottom-left",
  BottomRight = "bottom-right",
}