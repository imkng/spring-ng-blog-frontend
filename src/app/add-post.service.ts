import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostPayload } from './add-post/post-payload';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddPostService {

  constructor(private httpClient: HttpClient) {
  }

  addPost(postPayload: PostPayload): Observable<any>{
    return this.httpClient.post('http://localhost:9090/api/posts/', postPayload);
  }

  getAllPost(): Observable<Array<PostPayload>>{
    return this.httpClient.get<Array<PostPayload>>("http://localhost:9090/api/posts/all");
  }

  getPost(permaLink: Number): Observable<PostPayload>{
    return this.httpClient.get<PostPayload>("http://localhost:9090/api/posts/get/" + permaLink);
  }
}
