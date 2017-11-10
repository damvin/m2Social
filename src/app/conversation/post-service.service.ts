import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Post} from '../post';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PostServiceService {

  constructor(private http: HttpClient) { }

    getAll(): Observable<Post[]> {
        return this.http.get<Post[]>('api/posts');
    }
}
