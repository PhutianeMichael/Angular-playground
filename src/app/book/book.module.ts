import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


export const bookRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: ':bookUrl',
    component: BookComponent
  }
];

@NgModule({
  declarations: [
    BookComponent,
    HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(bookRoutes)
  ],
  exports: [
    BookComponent,
    HomeComponent
  ]
})
export class BookModule { }
