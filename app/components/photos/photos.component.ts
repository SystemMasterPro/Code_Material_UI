import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../services/photos.service';
import { Photo } from '../../models/photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos: Photo[] = [];
  constructor(private service:PhotosService) { }

  ngOnInit(): void {
    this.service.getData().subscribe(data => { 
      // console.log(data);
      this.photos = data;
      // console.log(this.photos);
    })
  }

}
