import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import {HttpClientModule} from '@angular/common/http';
import {PostServiceService} from './post-service.service';
import { ConversationComponent } from './conversation/conversation.component';
import { ListPostComponent } from './list-post/list-post.component';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { ListCommentaireComponent } from './list-commentaire/list-commentaire.component';

@NgModule({
  imports: [
    CommonModule,
      HttpClientModule
  ],
    exports: [
        ConversationComponent
    ],
  declarations: [PostComponent, ConversationComponent, ListPostComponent, CommentaireComponent, ListCommentaireComponent],
    providers: [PostServiceService]
})
export class ConversationModule { }
