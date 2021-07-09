import React, { useEffect, useState } from 'react';
import BackendApi from '../../api/BackendApi';
import PostCard from './PostCard';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    await BackendApi.getAllPosts()
      .then((res) => {
        if (res.type === 'success') {
          setPosts(res.data);
        } else throw res;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="posts-page">
      <div className="post-lists">
        {posts.map((post, index) => {
          console.log(post);
          return <PostCard key={index} data={post} />;
        })}
      </div>
    </div>
  );
}

export default Posts;
