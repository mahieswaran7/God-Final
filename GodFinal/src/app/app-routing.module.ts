import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Home
  { path: '', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule), data: { breadcrumb: "Homepage" } },
  // About
  { path: 'about', loadChildren: () => import('./components/pages/about/about.module').then(m => m.AboutModule), data: { breadcrumb: "About Us" } },
  // Hotel
  { path: 'hotel/:minPrice/:maxPrice', loadChildren: () => import('./components/pages/hotel-grid/hotel-grid.module').then(m => m.HotelGridModule), data: { breadcrumb: "Hotel Grid" } },
  { path: 'hotel-grid', loadChildren: () => import('./components/pages/hotel-grid/hotel-grid.module').then(m => m.HotelGridModule), data: { breadcrumb: "Hotel Grid" } },
  { path: 'hotel-grid-left', loadChildren: () => import('./components/pages/hotel-grid-left/hotel-grid-left.module').then(m => m.HotelGridLeftModule), data: { breadcrumb: "Hotel Grid" } },
  { path: 'hotel-grid-right', loadChildren: () => import('./components/pages/hotel-grid-right/hotel-grid-right.module').then(m => m.HotelGridRightModule), data: { breadcrumb: "Hotel Grid" } },
  { path: 'hotel-details/:id', loadChildren: () => import('./components/pages/hotel-details/hotel-details.module').then(m => m.HotelDetailsModule), data: { breadcrumb: "Hotel Details" } },
  { path: 'hotel-details-left/:id', loadChildren: () => import('./components/pages/hotel-details-left/hotel-details-left.module').then(m => m.HotelDetailsLeftModule), data: { breadcrumb: "Hotel Details" } },
  { path: 'hotel-details-right/:id', loadChildren: () => import('./components/pages/hotel-details-right/hotel-details-right.module').then(m => m.HotelDetailsRightModule), data: { breadcrumb: "Hotel Details" } },
  // Blog
  { path: 'blog/cat/:catId', loadChildren: () => import('./components/pages/blog-grid/blog-grid.module').then(m => m.BlogGridModule), data: { breadcrumb: "Blog Grid" } },
  { path: 'blog/tag/:tagId', loadChildren: () => import('./components/pages/blog-grid/blog-grid.module').then(m => m.BlogGridModule), data: { breadcrumb: "Blog Grid" } },
  { path: 'blog/author/:authorId', loadChildren: () => import('./components/pages/blog-grid/blog-grid.module').then(m => m.BlogGridModule), data: { breadcrumb: "Blog Grid" } },
  { path: 'blog/search/:query', loadChildren: () => import('./components/pages/blog-grid/blog-grid.module').then(m => m.BlogGridModule), data: { breadcrumb: "Blog Grid" } },
  { path: 'blog-grid', loadChildren: () => import('./components/pages/blog-grid/blog-grid.module').then(m => m.BlogGridModule), data: { breadcrumb: "Blog Grid" } },
  { path: 'blog-grid-left', loadChildren: () => import('./components/pages/blog-grid-left/blog-grid-left.module').then(m => m.BlogGridLeftModule), data: { breadcrumb: "Blog Grid" } },
  { path: 'blog-grid-right', loadChildren: () => import('./components/pages/blog-grid-right/blog-grid-right.module').then(m => m.BlogGridRightModule), data: { breadcrumb: "Blog Grid" } },
  { path: 'blog-details/:id', loadChildren: () => import('./components/pages/blog-details/blog-details.module').then(m => m.BlogDetailsModule), data: { breadcrumb: "Blog Details" } },
  { path: 'blog-details-left/:id', loadChildren: () => import('./components/pages/blog-details-left/blog-details-left.module').then(m => m.BlogDetailsLeftModule), data: { breadcrumb: "Blog Details" } },
  { path: 'blog-details-right/:id', loadChildren: () => import('./components/pages/blog-details-right/blog-details-right.module').then(m => m.BlogDetailsRightModule), data: { breadcrumb: "Blog Details" } },
  // Booking
  { path: 'booking', loadChildren: () => import('./components/pages/booking/booking.module').then(m => m.BookingModule), data: { breadcrumb: "Booking" } },
  // Faqs
  { path: 'faqs', loadChildren: () => import('./components/pages/faqs/faqs.module').then(m => m.FaqsModule), data: { breadcrumb: "FAQ's" } },
  // Gallery
  { path: 'gallery', loadChildren: () => import('./components/pages/gallery/gallery.module').then(m => m.GalleryModule), data: { breadcrumb: "Gallery" } },
  // Contact
  { path: 'contact', loadChildren: () => import('./components/pages/contact/contact.module').then(m => m.ContactModule), data: { breadcrumb: "Contact Us" } },
  // Additional
  { path: 'coming-soon', loadChildren: () => import('./components/pages/coming-soon/coming-soon.module').then(m => m.ComingSoonModule), data: { breadcrumb: "Coming Soon" } },
  { path: 'error-page', loadChildren: () => import('./components/pages/error-page/error-page.module').then(m => m.ErrorPageModule), data: { breadcrumb: "Error 404" } },
  { path: '**', loadChildren: () => import('./components/pages/error-page/error-page.module').then(m => m.ErrorPageModule), data: { breadcrumb: "Error 404" } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
