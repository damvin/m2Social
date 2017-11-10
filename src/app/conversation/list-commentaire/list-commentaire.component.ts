import { Component, OnInit } from '@angular/core';
import {Commentaire} from '../commentaire';
import {CommentaireServiceService} from '../commentaire-service.service';

@Component({
  selector: 'app-list-commentaire',
  templateUrl: './list-commentaire.component.html',
  styleUrls: ['./list-commentaire.component.css']
})
export class ListCommentaireComponent implements OnInit {
    listCommentaire: Commentaire[];
    id: number;
    constructor(private service: CommentaireServiceService) { }

   ngOnInit() {
       /*    this.service.get().subscribe(commentaires => this.listCommentaire = commentaires ); */
    }

}
