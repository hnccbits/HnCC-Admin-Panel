import React, { useState } from 'react';
import { DateTimePicker, FormInput } from '../Input';

const DATE = `${new Date().getFullYear()}-${
  new Date().getUTCMonth() + 1 ? '0' : ''
}${new Date().getUTCMonth() + 1}-${new Date().getDate()}`;

const TIME = `${new Date().getHours() < 9 ? '0' : ''}${new Date().getHours()}:${
  new Date().getMinutes() < 9 ? '0' : ''
}${new Date().getMinutes()}`;

const MeetForm = ({ action }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(DATE);
  const [time, setTime] = useState(TIME);
  const [agenda, setAgenda] = useState('');
  const [link, setLink] = useState('');
  const [team, setTeam] = useState('all');

  const handleSubmit = (e) => {
    e.preventDefault();
    action({
      agenda: agenda.trim(),
      intiated_by: 10,
      link: link.trim(),
      team: team.trim(),
      start_time: time,
    });

    setAgenda('');
    setLink('');
    setDate(DATE);
    setTime(TIME);
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
          <FormInput
            label="Agenda"
            type="text"
            value={agenda}
            onChange={(e) => setAgenda(e.target.value)}
            id="agenda"
            placeholder="Title of the meet"
            required
          />
        </div>
        <div className="meetForm">
          <FormInput
            label="Meet Link"
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            id="meetLink"
            placeholder="Enter meet link"
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

            <DateTimePicker
              label="Time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              id="time"
              placeholder="Select"
              required
            />
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

export default MeetForm;
