import React from "react";
import Screen from "../Screen";
import Form from "../Form";

export default function Meet() {
  return (
    <Screen>
      <div className="meet">
        <Form />
        <div className="meetList">
          <p>Meet list</p>
          <table>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Agenda of the meet</th>
              <th>Date</th>
              <th>Time</th>
              <th>Attendance</th>
            </tr>

            <Table
              id="1"
              title="Title of the meet"
              agenda="Agenda of the meet"
              date="12 July, 2021"
              time="10:00 pm"
            />
          </table>
        </div>
      </div>
    </Screen>
  );
}

const Table = ({ id, title, agenda, date, time }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{agenda}</td>
      <td> {date}</td>
      <td>{time} </td>
      <td>
        <button>See details</button>
      </td>
    </tr>
  );
};
