import { Component, OnInit } from '@angular/core';
import { UnsplashService } from '../../services/unsplash.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  page = 1;

  photos: Array<any> = [];

  query: string;

  constructor( private unsplashService: UnsplashService,
               private spinner: NgxSpinnerService) {
    this.spinner.show();
    this.showData();
   }

  ngOnInit(): void {
  }
  onScroll(){
    this.page++;
    if (this.query === '') {
      this.unsplashService.getPhotos(this.page)
    .subscribe((data: any) => {
      data.forEach((elem) => {
        this.photos.push(elem);
      });
    });
    } else {
      this.unsplashService.search(this.query, this.page)
    .subscribe((data2: any) => {
      data2.results.forEach((elem) => {
        this.photos.push(elem);
      });
    });
    }
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
      this.spinner.hide();
    });
    } else {
      this.spinner.show();
      this.unsplashService.search(this.query)
      .subscribe((data2: any) => {
        this.photos = data2.results;
        this.spinner.hide();
      });
    }
  }

}
