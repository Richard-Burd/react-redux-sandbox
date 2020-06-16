// this will fetch all of the posts at once rathen than a selected post
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {
  const [posts, setPosts] = useState([])
  const [id, setId] = useState(1)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log(res);
        setPosts(res.data)
      })
      .catch(err => {
        console.log(err);
    })
  }, [])

  return (
    <div>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default DataFetching
