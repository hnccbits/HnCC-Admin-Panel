import React, { useState } from 'react';
import { createMeet } from '../api/Meets';

const DATE = `${new Date().getFullYear()}-${
  new Date().getUTCMonth() + 1 ? '0' : ''
}${new Date().getUTCMonth() + 1}-${new Date().getDate()}`;

const Form = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(DATE);
  const [time, setTime] = useState();
  const [agenda, setAgenda] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createMeet({
      agenda: agenda.trim(),
      intiated_by: 1,
      link: link.trim(),
    })
      .then((res) => {
        if (res.type === 'success') setDate(res.data);
        else throw res;
      })
      .catch((err) => {
        console.log(err);
      });

    setDate(DATE);
    setLink('');
    setTitle('');
    setAgenda('');
    setTime();
  };
  return (
    <section className="form_container">
      <h3>Create new meet</h3>
      <form>
        <div className="meetForm">
          <div className="meetRow">
            <div className="meetLabel">
              <label>Title</label>
            </div>
            <div className="meetInput">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                id="title"
                placeholder="Title of the meet"
                required
              />
            </div>
          </div>
          <div className="meetRow">
            <div className="meetLabel">
              <label>Agenda</label>
            </div>
            <div className="meetInput">
              <input
                type="text"
                value={agenda}
                onChange={(e) => setAgenda(e.target.value)}
                id="agenda"
                placeholder="Agenda of the meet"
                required
              />
            </div>
          </div>
        </div>
        <div className="meetForm">
          <div className="meetRow">
            <div className="meetLabel">
              <label>Meet Link</label>
            </div>
            <div className="meetInput">
              <input
                type="text"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                id="meetLink"
                placeholder="Enter meet link"
                required
              />
            </div>
          </div>

          <div className="rowDate">
            <div className="date">
              <div className="col-label">
                <label>Date</label>
              </div>
              <div className="col-input">
                <input
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
            <div className="date">
              <div className="col-label">
                <label>Time</label>
              </div>
              <div className="col-input">
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  id="time"
                  placeholder="Select"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div className="meetForm">
          <input
            onClick={(e) => handleSubmit(e)}
            className="submit"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </section>
  );
};

export default Form;
