import React from 'react'
import './post.css'
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { AddPost, deletPost, updatePost } from '../rtk/postsSlice'

function Post() {
const [title, setTitle]=useState("")
const [desc, setDesc]=useState("")

const [updatedTitle, setUpdatedTitle]=useState("");
const [updatedDesc, setUpdatedDesc]=useState("")

const [isedit, setIsedit]=useState(false);
const [id, setId]=useState(null)

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
    <input value={title}
    onChange={(e) => setTitle(e.target.value)}
    type="text" className="form-control" id="exampleInputText"  placeholder='pleace enter your title'
     aria-describedby="textHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
    <input value={desc}
        onChange={(e) => setDesc(e.target.value)}
    type="text" className="form-control" id="exampleInputPassword1" placeholder='pleace enter your description' />
  </div>

  <button 
  onClick={() => {dispatch(AddPost({id: posts.length +1, title, desc}))
setTitle("");
setDesc("");
}}
  type="submit" className="btn btn-primary">ADD Post</button>


{posts.length > 0 && 
    posts.map((post) => (
      <div key={post.id} style={ {marginTop: "50px", background: "#fff", textAlign: "center", padding: "10px"} }>
      <h2 > post title is :  {post.title} </h2>
      <h5> post Description is :{post.desc} </h5>
      <button 
      onClick={() => {
        setIsedit(true)
        setId(post.id)
      }
      
      }
      type="submit" className="btn btn-primary" style={{margin: "0 10px"}}>Edit</button>
      <button 
      onClick={() => dispatch(deletPost(post.id))}
      type="submit" className="btn btn-danger">Delete</button>
      {
        isedit && id === post.id &&
        <>
      <div class="m-3">
    <input type="text" placeholder='enter yout title' className='m-3' 
    onChange={(e) => setUpdatedTitle(e.target.value)}
    />
    <input type="text" placeholder='enter yout desc' 
    onChange={(e) => setUpdatedDesc(e.target.value)}
    />
  </div>
          <button onClick={() =>{ dispatch(updatePost({
            id: post.id, title: updatedTitle, desc: updatedDesc
          }))
          setIsedit(false)
        }
          } className='btn btn-primary'>Edit Sure</button>
        </>
      }
  </div>
    ))
  }


</form>
    </div>
  )
}

export default Post
