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

  constructor( private unsplashService: UnsplashService) {
    this.unsplashService.getPhotos(this.page)
    .subscribe((data: any) => {
      this.photos = data;
      console.log(this.photos);
    });
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

}
