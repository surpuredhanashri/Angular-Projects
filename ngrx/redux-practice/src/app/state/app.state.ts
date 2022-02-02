import { counterReducer } from '../Counterr/CounterState/counter.reducer';
import { CounterState } from '../Counterr/CounterState/counter.state';
import { postReducer } from '../postState/post.reducer';
import { PostState } from '../postState/post.state';

export interface AppState {
  counter: CounterState;
  posts: PostState;
}

export const AppReducer={
    counter:counterReducer,
    post:postReducer
}