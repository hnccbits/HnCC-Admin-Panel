import React, { useEffect, useState } from 'react';
import { createMeet } from '../../api/Meets';
import { DateTimePicker, FormInput } from '../Input';

const DATE = `${new Date().getFullYear()}-${
  new Date().getUTCMonth() + 1 ? '0' : ''
}${new Date().getUTCMonth() + 1}-${new Date().getDate()}`;

const TIME = `${
  new Date().getHours() < 10 ? '0' : ''
}${new Date().getHours()}:${
  new Date().getMinutes() < 10 ? '0' : ''
}${new Date().getMinutes()}`;

const PostForm = ({ setData }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [time, setTime] = useState(TIME);

  useEffect(() => {
    const timer = setInterval(() => {
      const TIME = `${
        new Date().getHours() < 10 ? '0' : ''
      }${new Date().getHours()}:${
        new Date().getMinutes() < 10 ? '0' : ''
      }${new Date().getMinutes()}`;
      setTime(TIME);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createMeet({
      agenda: description.trim(),
      intiated_by: 1,
      link: link.trim(),
    })
      .then((res) => {
        if (res.type === 'success') setData(res.data);
        else throw res;
      })
      .catch((err) => {
        console.log(err);
      });
    setLink('');
    setTitle('');
    setDescription('');
  };

  return (
    <section className="form_container">
      <h3>Create new post</h3>
      <form onSubmit={handleSubmit}>
        <div className="meetForm">
          <FormInput
            label="Title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title of the post"
            required
          />
          <FormInput
            label="Description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description of post"
            required
          />
        </div>
        <div className="meetForm">
          <FormInput
            label="Resource Link"
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Enter resource link"
          />

          <div className="rowDate">
            <DateTimePicker
              label="Date"
              type="date"
              value={DATE}
              required
              readOnly
            />

            <DateTimePicker
              label="Time"
              type="time"
              value={time}
              placeholder="Select"
              required
              readOnly
            />
          </div>
        </div>
        <div className="meetForm">
          <input className="submit" type="submit" value="Submit" />
        </div>
      </form>
    </section>
  );
};

export default PostForm;
