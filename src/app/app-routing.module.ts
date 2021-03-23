import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { AddressBookPage } from './address-book/address-book.page';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    // folder/Inboxlogin
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'search-product',
    loadChildren: () => import('./search-product/search-product.module').then( m => m.SearchProductPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'otplogin',
    loadChildren: () => import('./otplogin/otplogin.module').then( m => m.OtploginPageModule)
  },
  {
    path: 'shops',
    loadChildren: () => import('./shops/shops.module').then( m => m.ShopsPageModule)
  },
  {
    path: 'productlist',
    loadChildren: () => import('./productlist/productlist.module').then( m => m.ProductlistPageModule)
  },
  {
    path: 'product-detailed-list',
    loadChildren: () => import('./product-detailed-list/product-detailed-list.module').then( m => m.ProductDetailedListPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'my-orders',
    loadChildren: () => import('./my-orders/my-orders.module').then( m => m.MyOrdersPageModule)
  },
  {
    path: 'listtopdeals',
    loadChildren: () => import('./listtopdeals/listtopdeals.module').then( m => m.ListtopdealsPageModule)
  },
  {
    path: 'address-book',
    loadChildren: () => import('./address-book/address-book.module').then( m => m.AddressBookPageModule)
  },
  {
    path: 'add-user-new-address',
    loadChildren: () => import('./add-user-new-address/add-user-new-address.module').then( m => m.AddUserNewAddressPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'profiledetails',
    loadChildren: () => import('./profiledetails/profiledetails.module').then( m => m.ProfiledetailsPageModule)
  },
  {
    path: 'testingcomponets',
    loadChildren: () => import('./testingcomponets/testingcomponets.module').then( m => m.TestingcomponetsPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'mapagmdrag',
    loadChildren: () => import('./mapagmdrag/mapagmdrag.module').then( m => m.MapagmdragPageModule)
  },
  {
    path: 'navigaiondrawer',
    loadChildren: () => import('./navigaiondrawer/navigaiondrawer.module').then( m => m.NavigaiondrawerPageModule)
  },
  {
    path: 'generalshop-dishes',
    loadChildren: () => import('./generalshop-dishes/generalshop-dishes.module').then( m => m.GeneralshopDishesPageModule)
  },
  {
    path: 'imageviewer',
    loadChildren: () => import('./imageviewer/imageviewer.module').then( m => m.ImageviewerPageModule)
  },
  {
    path: 'sidebar',
    loadChildren: () => import('./sidebar/sidebar.module').then( m => m.SidebarPageModule)
  },
  {
    path: 'pre-order',
    loadChildren: () => import('./pre-order/pre-order.module').then( m => m.PreOrderPageModule)
  },

];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
