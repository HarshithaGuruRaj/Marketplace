import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{

  constructor() { }
  pageTitle: string = 'Product List';
  imageWidth : number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  
  private _listFilter : string = '';
  get listFilter() : string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    console.log('Filter changed to:', value);
    this.filteredProducts = this.performFilter(value);
  }
 
  filteredProducts : IProduct[] = [];

  products : IProduct[] = [
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

  ngOnInit(): void {
      console.log('Product List initialized...');
      this.listFilter = "";
  }

  performFilter(filterBy: string) : IProduct[] {
    console.log('Performing filter on:', filterBy);
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => 
        product.productName.toLocaleLowerCase().includes(filterBy));
  }
  
  toggleImg() : void {
    this.showImage =!this.showImage;
  }

}
