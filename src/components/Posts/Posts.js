import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import PostsApi from '../../api/PostsApi';
import CreateNotifications from '../config/Notifications';
import PostForm from './PostForm';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const initialLoad = async () => {
      await PostsApi.getAllPosts()
        .then((res) => {
          if (res.type === 'success') {
            setPosts(res.data);
          } else throw res;
        })
        .catch((err) => {
          CreateNotifications('error', err.message);
        });
    };

    initialLoad();
  }, []);

  return (
    <div className="page__form_listing">
      <PostForm setData={setPosts} />
      <div className="data_table">
        <p>Posts list</p>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Date</th>
              <th>Time</th>
              <th>View More</th>
            </tr>
          </thead>

          <tbody>
            {posts.map((item, index) => {
              return <TableRow data={item} key={index} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Posts;

const TableRow = ({ data }) => {
  const history = useHistory();
  return (
    <tr>
      <td>{data.author}</td>
      <td>{data.title}</td>
      <td> {new Date().toLocaleDateString()}</td>
      <td>{new Date().toLocaleTimeString()} </td>
      <td>
        <button onClick={() => history.push(`/posts/${data.id}`)}>
          See details
        </button>
      </td>
    </tr>
  );
};
