import React, { useEffect, useState } from 'react';
import Form from '../Form';
import { getAllMeets } from '../../api/Meets';

export default function Meet() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let isSubscribed = true;
    const initialLoad = async () => {
      await getAllMeets()
        .then((res) => {
          console.log(res);
          if (!isSubscribed) return;
          if (res.type === 'success') setData(res.data);
          else throw res;
        })
        .catch((err) => {
          console.log(err);
        });
    };

    initialLoad();
  }, []);
  return (
    <div className="meet">
      <Form />
      <div className="meetList">
        <p>Meet list</p>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Agenda of the meet</th>
              <th>Date</th>
              <th>Time</th>
              <th>Attendance</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => {
              return <TableRow data={item} key={index} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
const TableRow = ({ data }) => {
  return (
    <tr>
      <td>{data.intiated_by}</td>
      <td>Title</td>
      <td>{data.agenda}</td>
      <td> {new Date().toLocaleDateString()}</td>
      <td>{new Date().toLocaleTimeString()} </td>
      <td>
        <button>See details</button>
      </td>
    </tr>
  );
};
