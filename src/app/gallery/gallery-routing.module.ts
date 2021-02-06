import { GalleryComponent } from './pages/gallery-page/gallery-page.component';
import { Routes } from '@angular/router';
import { SecondComponent } from './pages/second/second.component';
import { FirstComponent } from './pages/first/first.component';
import { ChannelsComponent } from './pages/channels/channels.component';

export const galleryRoutes: Routes = [
  {
    path: '',
    component: GalleryComponent,
    children: [
      { path: '', redirectTo: 'second', pathMatch: 'full' },
      { path: 'second', component: SecondComponent },
      { path: 'first', component: FirstComponent },
      { path: 'channels', component: ChannelsComponent },
    ]
 },
];

