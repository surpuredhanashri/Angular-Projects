import { createReducer, on } from '@ngrx/store';
import { addPost, deletePost, updatePost } from './post.action';
import { initialState } from './post.state';

const _postReducer = createReducer(
  initialState,
  on(addPost, (state, action) => {
    let post = { ...action.post };
    post.id = state.posts.length + 1;

    return {
      ...state,
      posts: [...state.posts, post],
    };
  }),
  // on(updatePost, (state, action) => {
  //   const updatedPost = state.posts.map((post) => {
  //     console.log(post)
  //     return action.post.id === post.id ? action.post : post;
  //   });
  //   return {
  //     ...state,
  //     post: updatedPost,
  //   };
  // })

  on(updatePost, (state, action) => {
    const updatedPost = state.posts.map((post) => {
      console.log(post);
      return action.post.id === post.id ? action.post : post;
    });
    return {
      ...state,
      posts: updatedPost,
    };
  }),
  on(deletePost, (state, { id }) => {
    const deletedPost = state.posts.filter((post) => {
      return post.id != id;
    });
    return {
      ...state,
      posts: deletedPost,
    };
  })
);

export function postReducer(state: any, action: any) {
  return _postReducer(state, action);
}
