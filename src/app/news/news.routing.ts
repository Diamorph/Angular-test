import { Routes, RouterModule } from '@angular/router';
import {NewsComponent} from './news.component';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent, data: {meta: {title: 'News', description: 'News', override: true} },
  }
];

export const NewsRoutes = RouterModule.forChild(routes);
