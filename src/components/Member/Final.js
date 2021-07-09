import React, { useEffect, useState } from 'react';
import BackendApi from '../../api/BackendApi';
import Screen from '../Screen';

export default function Final() {
  const [data, setData] = useState([]);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    await BackendApi.getUserByYear(2017)
      .then(async (res) => {
        if (res.type === 'success') {
          setData(res.data);
        } else throw res;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Screen>
      <div style={{ color: 'white' }}>{data.length}</div>
    </Screen>
  );
}
