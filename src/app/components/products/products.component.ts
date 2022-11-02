import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from '../../services/products/products.service';

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService],
})
export class ProductsComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Products List';
  errorMessage: string = '';
  showImage: boolean = false;
  filteredProducts: Product[] = [];
  products: Product[] = [];
  sub!: Subscription;

  private _listFilter: string = '';

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.sub = this.productsService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: (error) => (this.errorMessage = error),
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  setFilteredProducts(value: string): Product[] {
    return this.products.filter((product: Product) =>
      product.productName.toLowerCase().includes(value.toLowerCase())
    );
  }

  onRatingClicked(message: string): void {
    this.pageTitle = message;
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.setFilteredProducts(value);
  }
}
