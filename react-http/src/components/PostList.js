// Lesson 42 (https://www.youtube.com/watch?v=NEYrSUM4Umw&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=42)
// Below is the process flow in order of events firing
import React, { Component } from 'react';
import axios from 'axios';

class PostList extends Component {
  // 1.) the constructor runs first
  constructor(props) {
    super(props)

    this.state = {
      // 2.) The posts are set to an empty array
      posts: [],
      error: ""
    }
  }

  // 7.) Then the component flows to "componentDidMount()"
  componentDidMount() {
    // 8.) next we run our HTTP request...
    axios.get('http://jsonplaceholder.typicode.com/posts')
      .then(response => {
        console.log(response);
        // 9.) ...then when retrieved, we update the "posts" property
        this.setState({posts: response.data})
      })
      .catch(error => {
        console.log(error);
        this.setState({errorMsg: 'Error retreiving data'})
      })
  }

  // 4.) the control flows to the render method
  // 10.) Once we've changed state above (in step 9) the component will re-render
  render() {
    const { posts, errorMsg } = this.state
    return (
      // 5.) the "List of Posts" is displayed...
      <div><h1>List of Posts</h1>
        {/* 6.) ...but the posts are not displayed because they are empty at the moment */}
        {
          posts.length ?
          // 11.) this time, the array is not empty, so the line below will run:
          posts.map(post => <div key={post.id}>{post.title}</div>) :
          null
        }
        { errorMsg ? <div>{errorMsg}</div> : null }
      </div>
    )
  }
}

export default PostList
