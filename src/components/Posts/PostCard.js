import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PostsApi from '../../api/PostsApi';
import CreateNotifications from '../config/Notifications';

function PostCard({ initialData }) {
  const [data, setData] = useState(initialData);
  const params = useParams();
  useEffect(() => {
    let isSubscribed = true;

    const initialLoad = async () => {
      await PostsApi.getPostDetail(params.id)
        .then((res) => {
          if (!isSubscribed) return;
          if (res.type === 'success') setData(res.data);
          else throw res;
        })
        .catch((err) => {
          CreateNotifications('error', err.message);
        });
    };
    initialLoad();
  }, [initialData, params]);
  return data ? (
    <section className="__modal_view">
      <div style={{ color: 'white' }}>
        <h4>{data.author}</h4>
        <h4>{data.title}</h4>
        <h4>{data.content}</h4>
      </div>
    </section>
  ) : (
    <h1>Loading</h1>
  );
}

export default PostCard;
