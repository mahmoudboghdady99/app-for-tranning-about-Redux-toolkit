import React from 'react'
import './post.css'
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { AddPost } from '../rtk/postsSlice'

function Post() {
const [title, setTitle]=useState("")
const [desc, setDesc]=useState("")
console.log(title, desc);

const dispatch=useDispatch()

const posts =useSelector((state) => state.posts.postr)

 
const handleSubmit = (e) => {
  e.preventDefault()
}

  return (

    <div className='container'>
      <form onSubmit={handleSubmit}>
  <div className="mb-3" style={ {marginTop: "50px"} }>
    <label htmlFor="exampleInputText" className="form-label">Text Title </label>
    <input 
    onChange={(e) => setTitle(e.target.value)}
    type="text" className="form-control" id="exampleInputText"  placeholder='pleace enter your title'
     aria-describedby="textHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
    <input 
        onChange={(e) => setDesc(e.target.value)}
    type="text" className="form-control" id="exampleInputPassword1" placeholder='pleace enter your description' />
  </div>

  <button 
  onClick={() => {dispatch(AddPost({id: 1, title, desc}))}}
  type="submit" className="btn btn-primary">ADD Post</button>


{posts.length > 0 && 
    posts.map((post) => (
      <div key={post.id} style={ {marginTop: "50px", background: "#fff", textAlign: "center", padding: "10px"} }>
      <h2 > post title is :  {post.title} </h2>
      <h5> post Description is :{post.desc} </h5>
      <button type="submit" className="btn btn-primary" style={{margin: "0 10px"}}>Edit</button>
      <button type="submit" className="btn btn-danger">Delete</button>
  </div>
    ))
  }


</form>
    </div>
  )
}

export default Post
