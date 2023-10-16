import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';
import { AddPostService } from '../add-post.service';
import { PostPayload } from '../add-post/post-payload';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  loggedUser: any;

  posts: Observable<Array<PostPayload>>;
  constructor(private postService: AddPostService, private $localStorage: LocalStorageService){

  }
  ngOnInit(): void {
      this.posts = this.postService.getAllPost();
      this.loggedUser = this.$localStorage.retrieve("username");
      console.log(this.loggedUser);
      
  }
}
