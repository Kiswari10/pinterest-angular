import { Component, OnInit } from '@angular/core';
import { UnsplashService } from '../../services/unsplash.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private unsplashService: UnsplashService) {
    this.unsplashService.getPhotos()
    .subscribe((data) => {
      console.log(data);
    });
   }

  ngOnInit(): void {
  }

}
