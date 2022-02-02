import { createFeatureSelector, createSelector, props } from '@ngrx/store';
import { PostState } from './post.state';

const getPostState = createFeatureSelector<PostState>('post');

export const getpost = createSelector(getPostState, (state) => {
  return state.posts;
});

export const getPostById = (id: number) =>
  createSelector(getPostState, (state: any) => {
    console.log(state.posts);
    return state.posts.find((post: { id: number }) => post.id == id);
  });
