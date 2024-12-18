import { Component } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from '../../../services/common/http-client.service';

@Component({
  selector: 'app-productss',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent extends BaseComponent {
  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService) {
    super(spinner);
  }

  ngOnInit(): void {
    // this.showSpinner(SpinnerType.BallAtom);
    this.httpClientService.get({
      controller: "products"
    }).subscribe(data => console.log(data));

    // this.httpClientService.post( {
    //   controller: "products"
    // }, {
    //   name: "Kalem",
    //   stock: 100,
    //   price: 15
    // }).subscribe();

    // this.httpClientService.put({
    //   controller: "products"
    // }, {
    //   id: "0193d9b2-cab7-7539-b3f7-d560695cfef6",
    //   name: "Renkli Kağıt",
    //   stock: 1500,
    //   price: 5.5
    // }).subscribe();

    // this.httpClientService.delete({
    //   controller: "products"
    // }, "0193d9b2-cab7-7a8b-94dd-93785480f49e").subscribe();

    this.httpClientService.get({
      baseUrl: "https://jsonplaceholder.typicode.com",
      controller: "posts"}
    ).subscribe(data => console.log(data));
  }
}
