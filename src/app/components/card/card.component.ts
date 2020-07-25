import { Component, OnInit, Input } from '@angular/core';
import { UnsplashService } from '../../services/unsplash.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  dataPhoto: any = {};

  @Input() photos: Array<any>;

  constructor(
    private unsplashService: UnsplashService
  ) { }

  ngOnInit(): void {
  }
  getId(id){
    console.log(id);
    this.getPhotoById(id);
  }
  getPhotoById(id){
    this.unsplashService.getPhotosById(id)
    .subscribe((data: any) => {
      this.dataPhoto = data;
      console.log(data.urls.small);
      console.log(data);
    });
  }

}
