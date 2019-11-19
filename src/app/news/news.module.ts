import { NgModule } from '@angular/core';
import {NewsComponent} from './news.component';
import {NewsRoutes} from './news.routing';
import {NewsService} from './services/news.service';
import {CommonModule} from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';

@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    NewsRoutes,
    CommonModule,
    PaginationModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  providers: [NewsService],
})
export class NewsModule { }
