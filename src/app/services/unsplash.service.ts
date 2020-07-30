import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {
  url = environment.url;
  private query = new BehaviorSubject<string>('');

  query$ = this.query.asObservable();

  constructor( private http: HttpClient ) { }

  getPhotos(page = 1 ) {
    return this.http.get(`${this.url}photos?page=${page}&per_page=20`);
  }
  getPhotosById(id) {
    return this.http.get(`${this.url}photos/${id}`);
  }

  getData(word){
    this.query.next(word);
  }
  search(value, page = 1 ){
    return this.http.get(`${this.url}search/photos/?page=${page}&per_page=20&query=${value}`);
  }
}
