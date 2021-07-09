import React from 'react'
import Screen from '../Screen';
import { useHistory } from 'react-router-dom';

export default function Sophomores() {
    return (
      <Screen>
        <div className="memberList">
          <h1 >Sophomores</h1> 
          <div className='listContainer'>
            <div className='listChild'>
              <Content
               imageUrl="https://hnccbits.com/images/team/2k19/Zeeshan%20Ashraf.jpg"
               name="Zeeshan Ashraf"
               batch="2k19, ECE"
               link=""/>
            </div>
            <div className='listChild'>
              <Content
               imageUrl="https://hnccbits.com/images/team/2k19/Abhinav-IT.jpg"
               name="Abhinav Kr Singh"
               batch="2k19, IT"
               link=""/>
            </div>
            <div className='listChild'>
              <Content
               imageUrl="https://hnccbits.com/images/team/2k19/Anand.jpg"
               name="Anand Kumar"
               batch="2k19, ECE"
               link=""/>
            </div>
            <div className='listChild'>
              <Content
               imageUrl="https://hnccbits.com/images/team/2k19/Shivam%20Kedia.jpg"
               name="Shivam Kedia"
               batch="2k19, IT"
               link=""/>
            </div>
            <div className='listChild'>
              <Content/>
            </div>

          </div>
        </div>
      </Screen>
    )
}

  const Content = ({ imageUrl, name,batch,link }) => {
    const history = useHistory();
    return (
        <div className="content">
            <img src={imageUrl} alt="profile-pic"/>
            <h3>{name}</h3>
            <p>{batch}</p>
            <a onClick={() => history.push('/members/Profile')} href={link}>View profile</a>
        </div>
    );
  };


