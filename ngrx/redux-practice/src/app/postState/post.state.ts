import { Post } from "../model/Post.model";

export interface PostState{
    posts:Post[]
}

export const initialState:PostState={
    posts:[
    {
        id:1,
        Title:"Random Title 1",
        Description:"Random Description 1"
    },
    {
        id:2,
        Title:"Random Title 2",
        Description:"Random Description 2"
    }
]
}