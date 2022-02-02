import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { postReducer } from '../postState/post.reducer';
import { AddPostComponent } from './add-post/add-post.component';
import { PostsComponent } from './posts/posts.component';
import { UpdatePostComponent } from './update-post/update-post.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    children: [
      { path: 'addPost', component: AddPostComponent },
      { path: 'edit/:id', component: UpdatePostComponent },
    ],
  },
];

@NgModule({
  declarations: [AddPostComponent, PostsComponent, UpdatePostComponent],
  imports: [RouterModule.forChild(routes),CommonModule,ReactiveFormsModule,FormsModule,StoreModule.forFeature('post',postReducer)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
