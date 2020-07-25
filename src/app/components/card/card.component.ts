import { Component, OnInit, Input } from '@angular/core';
import { UnsplashService } from '../../services/unsplash.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() photos: Array<any>;

  constructor(
    private unsplashService: UnsplashService
  ) { }

  ngOnInit(): void {
  }
  getId(event){
    console.log(event.target.id);
    this.getPhotoById(event.target.id);
  }
  getPhotoById(id){
    this.unsplashService.getPhotosById(id)
    .subscribe((data) => {
      console.log(data);
    });
  }

}
