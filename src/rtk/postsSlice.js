import { createSlice } from '@reduxjs/toolkit'

export const postsReducer = createSlice({
    initialState: {
        postr: []
    },
    name: "postsReducer",
    reducers: {
        AddPost: (state, action) => {
            console.log(action);
          state.postr.push(action.payload)
        },
        deletPost: (state, action) => {
            state.postr = state.postr.filter((post) => post.id !== action.payload)
        },
        updatePost: (state, action) => {
         state.postr.map((item) => {
            if(item.id===action.payload.id){
                item.title=action.payload.title;
                item.desc=action.payload.desc;
            }
         })
        }
    }
})

export const { AddPost, deletPost, updatePost } = postsReducer.actions

export default postsReducer.reducer