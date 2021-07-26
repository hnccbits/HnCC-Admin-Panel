import React from 'react';

function Calendar({ data }) {
  return (
    <div className="calendar__card">
      <div className="calendar__head">
        <h3>Title: {data.title}</h3>
      </div>
      <div className="date">
        <p>Date: {data.date}</p>
      </div>
    </div>
  );
}

export default Calendar;
