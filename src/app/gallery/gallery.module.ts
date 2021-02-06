import { GalleryFilterComponent } from './components/gallery-filter/gallery-filter.component';
import { DataService } from './services/data.services';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './pages/gallery-page/gallery-page.component';
import { SecondComponent } from './pages/second/second.component';
import { GalleryNavigationComponent } from './components/gallery-navigation/gallery-navigation.component';
import { ChannelsComponent } from './pages/channels/channels.component';
import { FirstComponent } from './pages/first/first.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


export const COMPONENTS = [
  GalleryComponent,
  SecondComponent,
  GalleryNavigationComponent,
  ChannelsComponent,
  FirstComponent,
  SecondComponent,
  GalleryFilterComponent,
];
@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [
    CommonModule,
    RouterModule,
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    DataService,
  ]
})
export class GalleryModule { }
