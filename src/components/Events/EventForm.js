import React, { useEffect, useState } from 'react';
import UsersApi from '../../api/Users';
import CreateNotifications from '../config/Notifications';
import { DateTimePicker, FormInput } from '../Input';

const DATE = `${new Date().getFullYear()}-${
  new Date().getUTCMonth() + 1 ? '0' : ''
}${new Date().getUTCMonth() + 1}-${new Date().getDate()}`;

const EventForm = ({ action }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(DATE);
  const [agenda, setAgenda] = useState('');
  const [team, setTeam] = useState('all');
  const [members, setMembers] = useState([]);
  const [lead, setLead] = useState('');

  useEffect(() => {
    const initialLoad = async () => {
      await UsersApi.getAllUsers()
        .then((res) => {
          if (res.type === 'success') {
            setMembers(res.data);
          } else throw res;
        })
        .catch((err) => {
          console.log(err);
          CreateNotifications('error', err.message);
        });
    };

    initialLoad();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    action({
      content: agenda.trim(),
      lead: 10,
      title: title.trim(),
      team: team.trim(),
      start_date: date,
    });

    setAgenda('');
    setDate(DATE);
    setTitle('');
    setTeam('');
  };

  return (
    <section className="form_container">
      <h3>Create new meet</h3>
      <form onSubmit={handleSubmit}>
        <div className="meetForm">
          <FormInput
            label="Title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            placeholder="Title of the meet"
            required
          />
          <div className="rowDate">
            <DateTimePicker
              label="Date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              id="date"
              placeholder="Select"
              min={DATE}
              required
            />
          </div>
        </div>
        <div className="meetForm">
          <FormInput
            label="Agenda"
            type="text"
            value={agenda}
            onChange={(e) => setAgenda(e.target.value)}
            id="agenda"
            placeholder="Title of the meet"
            required
          />
          <div className="meetForm event__form_team_select select__options">
            <label>Select Lead</label>
            <select
              onChange={(e) => setLead(e.target.value)}
              value={lead}
              className="select"
            >
              {members.map((item, index) => {
                return (
                  <option value={item.id} label={item.user_name} key={index} />
                );
              })}
            </select>
          </div>
        </div>
        <div className="meetForm select__options">
          <label>Select Team</label>
          <select
            onChange={(e) => setTeam(e.target.value)}
            value={team}
            className="select"
          >
            <option value="all" label="All" />
            <option value="content" label="Content" />
            <option value="design" label="Design" />
            <option value="marketing" label="Marketing" />
            <option value="web" label="Web" />
          </select>
        </div>
        <div className="meetForm">
          <input className="submit" type="submit" value="Submit" />
        </div>
      </form>
    </section>
  );
};

export default EventForm;
