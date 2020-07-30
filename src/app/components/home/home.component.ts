import { Component, OnInit } from '@angular/core';
import { UnsplashService } from '../../services/unsplash.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  page = 1;

  photos: Array<any> = [];

  query: string;

  constructor( private unsplashService: UnsplashService) {
    /* this.unsplashService.getPhotos(this.page)
    .subscribe((data: any) => {
      this.photos = data;
      console.log(this.photos);
    }); */
    this.showData();
   }

  ngOnInit(): void {
  }
  onScroll(){
    this.page++;
    console.log('scrolled');
    this.unsplashService.getPhotos(this.page)
    .subscribe((data: any) => {
      data.forEach((elem) => {
        this.photos.push(elem);
      });
      console.log(this.photos);
    });
  }
  showData(){
    this.unsplashService.query$
    .subscribe((msg) => {
      this.query = msg;
      this.getCollection();
    });
  }
  getCollection(){
    if (this.query === '') {
      this.unsplashService.getPhotos(this.page)
    .subscribe((data: any) => {
      this.photos = data;
      console.log(this.photos);
    });
    } else {
      this.unsplashService.search(this.query)
      .subscribe((data2: any) => {
        this.photos = data2.results;
        console.log('q trae la busqueda', data2);
        console.log(this.query);
      });
    }
  }

}
