import React from 'react'
import Screen from '../Screen';

export default function Sophomores() {
    return (
        <Screen>
        <div>
          <h1>Sophomores</h1> 
          <div className='list-container'>
            <div className='list-child'>
              <Content
               imageUrl=""
               name="shiwani kumari"
               batch="2k20, ECE"
               link=""/>
            </div>
            <div className='list-child'>
              <Content
               imageUrl=""
               name="shiwani kumari"
               batch="2k20, ECE"
               link=""/>
            </div>

        </div>
        </div>
        </Screen>
    )
}

  const Content = ({ imageUrl, name,batch,link }) => {
    return (
        <div className="content">
            <img src={imageUrl} alt="profile-pic" style="width:100%"/>
            <h4>{name}</h4>
            <p>{batch}</p>
            <a href={link}>View profile</a>
        </div>
    );
  };


