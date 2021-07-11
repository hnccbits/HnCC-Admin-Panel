import React from "react";
import Screen from "../Screen";

import Form from "../Form"

export default function Meet() {
  return (
    <Screen>
      <div className="meet">
        
        <div className="meetContainer">
          
         <div className="meetChild">
         
         <Form/>
         </div>
         <div className="meetChild">
          <EventCard
            title="Meets"
            num={0}
            data={[
              { title: 'Last Meet', decp: 'Agenda of the meet' },
              { title: 'New Meet', decp: 'Agenda of the meet' },
            ]}
            className="meet"
            
          />
          
         </div>
        </div>
      </div>
    </Screen>
  );
}
const EventCard = ({ className, num, title, data,nav}) => {
    return (
      <div className={`eventCard ${className}`}>
        <MeetNum num={num} title={title} />
        <MeetDetail data={data} />
       
      
       
      </div>
    );
  };
const MeetNum = ({ num, title }) => {
    return (
      <div className="meetNum">
        {num}
        <p>{title}</p>
      </div>
    );
  };
  const DetailBox = ({ num, title, date = null }) => {
    // const history = useHistory();
  
    return (
      <div className="detailBox">
        <h2>{num}</h2>
        <p>{title}</p>
        {date && <h4>{date}</h4>}
      </div>
    );
  };
  const MeetDetail = ({ data }) => {
    return (
      <div className="meetDetail">
        {data.map((item, index) => {
          return (
            <DetailBox
              key={index}
              num={item.title}
              title={item.decp}
              date={new Date().toLocaleDateString()}
             
            />
          );
        })}
      </div>
    );
  };

