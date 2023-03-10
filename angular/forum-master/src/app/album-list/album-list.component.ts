import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Album } from './album';

@Component({
  selector: 'album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent {
  private _MAX:number = 10;
  public albums: Array<Album>;

  constructor(private client:HttpClient) {
    this.albums = new Array<Album>();
    this.getAlbums();   
  }

  getAlbums():void {
    let randomIDs:Array<number> = new Array<number>();
    let rid:number = 0;
    let url:string = "https://jsonplaceholder.typicode.com/albums/";
    let newUrl:string = '';

    for (let i:number = 0; i < this._MAX; i++) {
      rid = Math.floor(Math.random() * 100) + 1;

      if (i === 0) {
        randomIDs.push(rid);
      }
      else {
        if (rid in randomIDs) {
          while (rid in randomIDs) {
            rid = Math.floor(Math.random() * 100) + 1;
          }

          randomIDs.push(rid);
        }
        else {
          randomIDs.push(rid);
        }
      }
    }
    
    for (let i:number = 0; i < 10; i++) {
      newUrl = url;
      newUrl += randomIDs.pop();
      this.client.get(newUrl).subscribe(
        (data:any[]) => {
          this.albums.push({
            userId: data["userId"],
            id: data["id"],
            title: data["title"]
          })
      });
    }
  }
}