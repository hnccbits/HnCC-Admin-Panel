import React from 'react'



export default class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
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
                     <input type="text"  value={this.state.value} onChange={this.handleChange}id="agenda"  placeholder="agenda of the meet"/>
                  </div>
             </div>
            <div className="row">
                  <div className="col-25">
                      <label for="date">Date</label>
                  </div>
                  <div className="col-75">
                    <input type="date"  value={this.state.value} onChange={this.handleChange} id="date" />
                  </div>
            </div>
            <div className="row">
                  <div className="col-25">
                      <label for="time">Time</label>
                  </div>
                  <div className="col-75">
                    <input type="time"  value={this.state.value} onChange={this.handleChange} id="time"/>
                  </div>
            </div>
            <div className="row">
                  <div className="col-25">
                      <label for="meetlink">Link</label>
                  </div>
                  <div className="col-75">
                    <input type="link"  value={this.state.value} onChange={this.handleChange} id="meetlink"/>
                  </div>
            </div>
           
           <div className="row">
                <input className="submit" type="submit" value="Submit"/>
            </div>
         </form>
  
       
      );
    }
  }


