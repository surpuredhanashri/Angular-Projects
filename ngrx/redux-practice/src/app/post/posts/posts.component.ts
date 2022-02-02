import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { deletePost } from 'src/app/postState/post.action';
import { Post } from '../../model/Post.model';
import { getpost } from '../../postState/post.selector';
import { AppState } from '../../state/app.state';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts!:Observable<Post[]>
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.posts=this.store.select(getpost)
  }
  onDeletePost(id:any){
    if(confirm("Are you sure you want to delete?")){
      this.store.dispatch(deletePost({id}))
    }
  }
}
