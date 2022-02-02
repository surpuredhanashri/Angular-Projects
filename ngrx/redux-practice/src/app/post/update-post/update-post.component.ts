import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/model/Post.model';
import { updatePost } from 'src/app/postState/post.action';
import { getPostById } from 'src/app/postState/post.selector';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css'],
})
export class UpdatePostComponent implements OnInit {
  postForm!: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router
  ) {}
  post!: Post;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params);
      this.store.select(getPostById(params['id'])).subscribe((post) => {
        console.log(post);
        this.post = post;
        this.postForm = new FormGroup({
          Title: new FormControl(this.post.Title, Validators.required),
          Description: new FormControl(
            this.post.Description,
            Validators.required
          ),
        });
      });
    });
  }

  updateForm() {
    const Title = this.postForm.value.Title;
    const Description = this.postForm.value.Description;

    const post: Post = {
      id: this.post.id,
      Title,
      Description,
    };

    this.store.dispatch(updatePost({ post }));
    this.router.navigate(['post']);
  }
}
