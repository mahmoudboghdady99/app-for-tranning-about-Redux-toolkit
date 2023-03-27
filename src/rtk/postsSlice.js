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
        }
    }
})

export const { AddPost, deletPost } = postsReducer.actions

export default postsReducer.reducer