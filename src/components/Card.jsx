import React from 'react';
import Avatar from './Avatar';
import Detail from './Detail';

function Card(props){
  return(
      <div className="card">
        <div className="top">
        <p> {props.uid} </p>
          <h2 className='name'>{props.name}</h2>
          <Avatar img={props.img}/>
        </div>
        <div className="bottom">
          <Detail detailInfo = {props.tel} />
          <Detail detailInfo = {props.mail} />
        </div>
      </div>
  )
}

export default Card;