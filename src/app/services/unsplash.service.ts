import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {
  url = environment.url;

  constructor( private http: HttpClient ) { }

  getPhotos(page = 1 ) {
    return this.http.get(`${this.url}photos?page=${page}&per_page=20`);
  }
  getPhotosById(id) {
    return this.http.get(`${this.url}photos/${id}`);
  }
}
