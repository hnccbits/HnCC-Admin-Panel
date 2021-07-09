import React from "react";
import Screen from "../Screen";

export default function Sophomores() {
  return (
    <Screen>
      <div className="memberList">
        <h1>Sophomores</h1>
        <div className="listContainer">
          <div className="listChild">
            <Content
              imageUrl="https://hnccbits.com/images/team/2k19/Zeeshan%20Ashraf.jpg"
              name="Zeeshan Ashraf"
              branch="ECE"
              link=""
            />
          </div>
          <div className="listChild">
            <Content
              imageUrl="https://hnccbits.com/images/team/2k19/Abhinav-IT.jpg"
              name="Abhinav Kr Singh"
              branch="IT"
              link=""
            />
          </div>
          <div className="listChild">
            <Content
              imageUrl="https://hnccbits.com/images/team/2k19/Anand.jpg"
              name="Anand Kumar"
              branch="ECE"
              link=""
            />
          </div>
          <div className="listChild">
            <Content
              imageUrl="https://hnccbits.com/images/team/2k19/Shivam%20Kedia.jpg"
              name="Shivam Kedia"
              branch="IT"
              link=""
            />
          </div>
          <div className="listChild">
            <Content
              imageUrl="https://hnccbits.com/images/team/2k19/Jayesh%20Kumar.jpg"
              name="Jayesh Kumar"
              branch="CSE"
              link=""
            />
          </div>
          <div className="listChild">
            <Content
              imageUrl="https://hnccbits.com/images/team/2k19/Aamir.jpeg"
              name="Aamir Akhtar"
              branch="Chemical"
              link=""
            />
          </div>
          <div className="listChild">
            <Content
              imageUrl="https://hnccbits.com/images/team/2k19/Abhinav-mech.jpg"
              name="Abhinav Kumar"
              branch="Mechanical"
              link=""
            />
          </div>
          <div className="listChild">
            <Content
              imageUrl="https://hnccbits.com/images/team/2k19/Rishav%20Gupta.jpg"
              name="Rishav Gupta"
              branch="Electrical"
              link=""
            />
          </div>
          <div className="listChild">
            <Content
              imageUrl="https://hnccbits.com/images/team/2k19/Prayanshu%20Singh.jpg"
              name="Prayanshu Singh"
              branch="ECE"
              link=""
            />
          </div>
          <div className="listChild">
            <Content
              imageUrl="https://hnccbits.com/images/team/2k19/Riya%20Kumari.jpg"
              name="Riya Kumari"
              branch="CSE"
              link=""
            />
          </div>
          <div className="listChild">
            <Content
              imageUrl="https://hnccbits.com/images/team/2k19/Anisha%20Murmu.jpg"
              name="Anisha Murmu
              "
              branch="ECE"
              link=""
            />
          </div>
          <div className="listChild">
            <Content
              imageUrl="https://hnccbits.com/images/team/2k19/Anjali%20Kumari.jpg"
              name="Anjali Kumari"
              branch="Chemical"
              link=""
            />
          </div>
          <div className="listChild">
            <Content
              imageUrl="https://hnccbits.com/images/team/2k19/Sapna%20Kumari.jpg"
              name="Sapna Kumari"
              branch="ECE"
              link=""
            />
          </div>
          <div className="listChild">
            <Content
              imageUrl="https://hnccbits.com/images/team/2k19/N%20Harshita.jpg"
              name="N. Harshita"
              branch="CSE"
              link=""
            />
          </div>
          <div className="listChild">
            <Content
              imageUrl="https://hnccbits.com/images/team/2k19/Himadri%20Pragya.jpeg"
              name="Himadri Pragya"
              branch="IT"
              link=""
            />
          </div>
          <div className="listChild">
            <Content
              imageUrl="https://hnccbits.com/images/team/2k19/Rahul%20Kumar.jpg"
              name="Rahul Kr. Yadav"
              branch="CSE"
              link=""
            />
          </div>
          <div className="listChild">
            <Content
              imageUrl="https://hnccbits.com/images/team/2k19/Abhinav-metal.jpg"
              name="Abhinav Kr. Singh"
              branch="Metal"
              link=""
            />
          </div>
          <div className="listChild">
            <Content
              imageUrl="https://hnccbits.com/images/team/2k19/Amit%20Kr%20Verma.jpg"
              name="Amit Kumar"
              branch="Production"
              link=""
            />
          </div>
          <div className="listChild">
            <Content
              imageUrl="https://hnccbits.com/images/team/2k19/Piyush%20Gupta.jpg"
              name="Piyush Gupta"
              branch="CSE"
              link=""
            />
          </div>
        </div>
      </div>
    </Screen>
  );
}

const Content = ({ imageUrl, name, branch, link }) => {
  return (
    <div className="content">
      <img src={imageUrl} alt="profile-pic" />
      <h3>{name}</h3>
      <p>2k19 {branch}</p>
      <a href={link}>View profile</a>
    </div>
  );
};
