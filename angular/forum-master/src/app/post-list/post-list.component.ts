import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from './post';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  private _MAX:number = 15;
  public posts: Array<Post>;

  constructor(private client:HttpClient) {
    this.posts = new Array<Post>();
    this.getPosts();   
  }

  getPosts():void {
    let randomIDs:Array<number> = new Array<number>();
    let rid:number = 0;
    let url:string = "https://jsonplaceholder.typicode.com/posts/";
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
    
    for (let i:number = 0; i < this._MAX; i++) {
      newUrl = url;
      newUrl += randomIDs.pop();
      this.client.get(newUrl).subscribe(
        (data:any[]) => {
          this.posts.push({
            userId: data["userId"],
            id: data["id"],
            title: data["title"]
          })
      });
    }
  }
}
