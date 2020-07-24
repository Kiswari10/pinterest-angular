import { Component, OnInit } from '@angular/core';
import { UnsplashService } from '../../services/unsplash.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  photos: Array<any> = [];

  constructor( private unsplashService: UnsplashService) {
    this.unsplashService.getPhotos()
    .subscribe((data: any) => {
      this.photos = data;
      console.log(this.photos);
    });
   }

  ngOnInit(): void {
  }

}
