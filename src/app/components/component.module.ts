import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductGuard } from '../guards/product/product.guard';
import { ProductComponent } from './product/product.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ConvertToSpacesPipe } from '../pipes/pipes';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    NavbarComponent,
    WelcomeComponent,
    NotfoundComponent,
    ProductsComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'products', component: ProductsComponent },
      {
        path: 'products/:id',
        canActivate: [ProductGuard],
        component: ProductComponent,
      },
      { path: 'welcome', component: WelcomeComponent },
      { path: '**', component: NotfoundComponent },
    ]),
  ],
  exports: [NavbarComponent],
})
export class ComponentModule {}
