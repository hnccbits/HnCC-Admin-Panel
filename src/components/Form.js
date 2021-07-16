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
        <div className="meetForm">
          <div className="meetRow">
            <div className="meetLabel">
              <label for="title">Title</label>
            </div>
            <div className="meetInput">
              <input
                type="text"
                value={this.state.text}
                onChange={this.handleChange}
                id="title"
                placeholder="Title of the meet"
              />
            </div>
          </div>
          <div className="meetRow">
            <div className="meetLabel">
              <label for="agenda">Agenda</label>
            </div>
            <div className="meetInput">
              <input
                type="text"
                value={this.state.date}
                onChange={this.handleChange}
                id="agenda"
                placeholder="Agenda of the meet"
              />
            </div>
          </div>
        </div>
        <div className="meetForm">
          <div className="meetRow">
            <div className="meetLabel">
              <label for="meetLink">Meet Link</label>
            </div>
            <div className="meetInput">
              <input
                type="text"
                value={this.state.time}
                onChange={this.handleChange}
                id="meetLink"
                placeholder="Enter meet link"
              />
            </div>
          </div>

          <div className="rowDate">
            <div className="date">
              <div className="col-label">
                <label for="date">Date</label>
              </div>
              <div className="col-input">
                <input
                  type="date"
                  value={this.state.link}
                  onChange={this.handleChange}
                  id="date"
                  placeholder="Select"
                />
              </div>
            </div>
            <div className=" date">
              <div className="col-label">
                <label for="time">Time</label>
              </div>
              <div className="col-input">
                <input
                  type="time"
                  value={this.state.link}
                  onChange={this.handleChange}
                  id="time"
                  placeholder="Select"
                  onfocus="(this.type='time')"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="meetForm">
          <input className="submit" type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}
