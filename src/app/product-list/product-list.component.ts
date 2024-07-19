import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  constructor() { }
  pageTitle: string = 'Product List';

  products : any[] = [
    {
      "productId": 1,
      "productName": "Hammer",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2021",
      "description": "Hammer with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/hammer.jpg"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2021",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "assets/images/garden_cart.jpg"
    },
  ]
  

}
