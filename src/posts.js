import React,{useState, useEffect} from 'react'
import axios from 'axios';
import "./posts.css";


const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
      axios.get('https://dummyjson.com/posts')
        .then(response => {
          setPosts(response.data.posts);
        })
        .catch(error => {
          console.log(error);
        });
    }, []); 
    
    return (
        <div className="posts-container">
          
        {posts.map(post => (
          <div key={post.id} className="post-card">
            <h2 className="post-title">{post.title}</h2>
            <p className="post-body">{post.body}</p>
            <p>{post.tags.map(tag =>
                (
                    <button className="tag">
                        {tag}
                    </button>
                )
                )}</p>
          </div>
        ))}
      </div>
  
    );
}

export default Posts;