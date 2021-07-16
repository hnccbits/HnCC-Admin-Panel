import React, { useEffect, useState } from 'react';
import UsersApi from '../../api/Users';
import Screen from '../Screen';
import MemberContent from './MemberContent';

const batchConverter = (year) => {
  if (year === 'freshers') return 2020;
  else if (year === 'sophomores') return 2019;
  else if (year === 'prefinal') return 2018;
  else return 2017;
};

export default function MemberByYear(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    initialLoad();

    // eslint-disable-next-line
  }, []);

  const initialLoad = async () => {
    const year = batchConverter(props.match.params.year);
    await UsersApi.getUserByYear(year)
      .then((res) => {
        console.log(res);
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
      <div className="memberList">
        <h1>Sophomores</h1>
        <div className="listContainer">
          {data.map((item, index) => {
            return (
              <div key={index} className="listChild">
                <MemberContent
                  imageUrl={''}
                  name={item.user_name}
                  branch={item.user_name}
                  id={item.id}
                  year={item.year}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Screen>
  );
}
