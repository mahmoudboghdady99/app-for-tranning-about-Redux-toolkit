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
        }
    }
})

export const { AddPost } = postsReducer.actions

export default postsReducer.reducer