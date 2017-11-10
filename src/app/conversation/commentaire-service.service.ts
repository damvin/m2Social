import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Commentaire} from './commentaire';

@Injectable()
export class CommentaireServiceService {
    constructor(private http: HttpClient) { }

    get(id: number): Observable<Commentaire> {
        return this.http.get<Commentaire>(`api/post/${id}/comments`);
    }

}
