import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/model/Post.model';
import { addPost } from 'src/app/postState/post.action';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  postForm!: FormGroup;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.postForm = new FormGroup({
      Title: new FormControl(null, [
        Validators.required,
        // Validators.minLength(6),
      ]),
      Description: new FormControl(null, [
        Validators.required,
        // Validators.minLength(10),
      ]),
    });
  }

  showTitleError(): any {
    const titleForm = this.postForm.get('Title');
    if (titleForm?.touched && !titleForm.valid) {
      if (titleForm.errors?.['required']) {
        return 'Title is required';
      }
      // if (titleForm.errors?.['minLength']) {
      //   return 'Title shuold be minimum 6 chara.';
      // }
    }
  }

  showDescriptionError(): any {
    const DescriptionForm = this.postForm.get('Description');
    if (DescriptionForm?.touched && !DescriptionForm.valid) {
      if (DescriptionForm.errors?.['required']) {
        return 'Description is required';
      }
      // if (DescriptionForm.errors?.['minLength']) {
      //   return 'Description shuold be minimum 10 chara.';
      // }
    }
  }
  AddForm() {
    if (!this.postForm.valid) {
      return;
    }
    console.log(this.postForm.value);

    const post: Post = {
      Title: this.postForm.value.Title,
      Description: this.postForm.value.Description,
    };

    this.store.dispatch(addPost({ post }));
  }
}
