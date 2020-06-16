// here you enter a number in a text value and the commensurate post is fetched
// and that post's title is rendered in the browser.
// in DataFetching.js, this is made more complex by adding a button.
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {
  const [post, setPost] = useState({})
  const [id, setId] = useState(1)

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        console.log(res);
        setPost(res.data)
      })
      .catch(err => {
        console.log(err);
    })
  }, [id])

  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <div>{post.title}</div>
      {/* }<ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  )
}

export default DataFetching
