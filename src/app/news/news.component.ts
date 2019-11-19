import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NewsService} from './services/news.service';
import {take} from 'rxjs/operators';
import {NewsModel} from './models/news.model';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsComponent implements OnInit {
  public pending = true;
  public news: NewsModel;
  public pagerData = {
    pageSize: 9,
    currentPage: 1
  };
  public allCountries: Array<string> = ['us', 'ua', 'pl', 'ru'];
  public allCategories: Array<string> = ['entertainment', 'business', 'general', 'health', 'science', 'sports', 'technology'];
  public filtersData = {
    selectedCountry: 'us',
    selectedCategory: 'entertainment',
    searchString: ''
  };
  constructor(private newsService: NewsService,
              private cdr: ChangeDetectorRef) { }
  ngOnInit(): void {
    this.getNewsData();
  }
  pageChanged(event: any): void {
    this.pagerData.currentPage = event.page;
    this.getNewsData();
  }
  public changeSearchString($event): void {
    if (this.filtersData.searchString.length > 2) {
      this.getNewsData(this.filtersData.searchString);
    }
  }
  public getNewsData(searchString?: string): void {   // or | async - i prefer this vay
    this.newsService.getNews(this.pagerData.currentPage, this.pagerData.pageSize, this.filtersData.selectedCountry, this.filtersData.selectedCategory, searchString)
      .pipe(take(1))
      .subscribe(res => {
        this.news = res;
        this.pending = false;
        this.cdr.markForCheck();
        console.log(this.news);
      });
  }
}
