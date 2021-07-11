import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
    this.state = { date: "" };
    this.state = { time: "" };
    this.state = { link: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.text });
    this.setState({ date: event.target.date });
    this.setState({ time: event.target.time });
    this.setState({ link: event.target.link });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <caption>Create new meet</caption>
        <div className="row">
          <div className="col-25">
            <label for="agenda">Agenda</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              value={this.state.text}
              onChange={this.handleChange}
              id="agenda"
              placeholder="agenda of the meet"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="date">Date</label>
          </div>
          <div className="col-75">
            <input
              type="date"
              value={this.state.date}
              onChange={this.handleChange}
              id="date"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="time">Time</label>
          </div>
          <div className="col-75">
            <input
              type="time"
              value={this.state.time}
              onChange={this.handleChange}
              id="time"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="meetlink">Link</label>
          </div>
          <div className="col-75">
            <input
              type="link"
              value={this.state.link}
              onChange={this.handleChange}
              id="meetlink"
            />
          </div>
        </div>

        <div className="row">
          <input className="submit" type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}
