import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {
  url = environment.url;

  constructor( private http: HttpClient ) { }

  getPhotos() {
    return this.http.get(`${this.url}photos?page=1&per_page=20`);
  }
}
