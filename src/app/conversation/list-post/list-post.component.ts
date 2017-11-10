import { Component, OnInit } from '@angular/core';
import {Post} from '../../post';
import {PostServiceService} from '../post-service.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
    listPost: Post[];
    constructor(private service: PostServiceService) { }

    ngOnInit() {
        this.service.getAll().subscribe(posts => this.listPost = posts );
    }

}
