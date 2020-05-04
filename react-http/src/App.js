// NOTE: axios was installed in this app with the bash command: $ npm install axios

import React from 'react';
import './App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  return (
    <div className="App">
      <PostList />
      <PostForm />
    </div>
  );
}

export default App;
