import React, { useEffect, useState } from 'react';
import { createEvent, getAllEvents } from '../../api/EventsAPI';
import CreateNotifications from '../config/Notifications';
import EventForm from './EventForm';

function Event() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let isSubscribed = true;
    const initialLoad = async () => {
      await getAllEvents()
        .then((res) => {
          console.log(res);
          if (res.type === 'success') {
            if (!isSubscribed) return;
            setData(res.data);
          } else throw res;
        })
        .catch((err) => {
          console.log(err);
          CreateNotifications('error', err.message);
        });
    };
    initialLoad();

    return () => (isSubscribed = false);
  }, []);

  const handleSubmit = async (input) => {
    await createEvent(input)
      .then((res) => {
        if (res.type === 'success') {
          setData(res.data);
        } else throw res;
      })
      .catch((err) => {
        console.log(err);
        CreateNotifications('error', err.message);
      });
  };
  return (
    <main className="page__form_listing events">
      <EventForm action={handleSubmit} />
      <section className="data_table">
        <p>Events List</p>
        <table>
          <thead>
            <tr>
              <th>Lead</th>
              <th>Title</th>
              <th>Agenda of the event</th>
              <th>Date</th>
              <th>Team</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => {
              return <TableRow data={item} key={index} />;
            })}
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default Event;

const TableRow = ({ data }) => {
  return (
    <tr>
      <td>{data.lead}</td>
      <td>{data.title}</td>
      <td>{data.content}</td>
      <td> {new Date(data.start_date).toLocaleDateString()}</td>
      <td>{data.team} </td>
    </tr>
  );
};
