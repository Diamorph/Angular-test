import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NewsModel} from '../models/news.model';
import {environment} from '../../../environments/environment';

@Injectable()
export class NewsService {
  private apiUrl = environment.apiUrl;
  private apiKey = environment.apiKey;
  constructor(private http: HttpClient) { }

  getNews(page: number, pageSize: number, selectedCountry: string, selectedCategory: string, searchString?: string): Observable<NewsModel> {
    const params = {
      page: page.toString(),
      pageSize: pageSize.toString(),
      country: selectedCountry,
      category: selectedCategory,
      apiKey: this.apiKey
    };
    if (searchString) {params['q'] = searchString; }
    return this.http.get<NewsModel>(this.apiUrl + '/top-headlines', {params: params});
  }

}
