import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className='tc bg-washed-blue br3 dib pa3 ma2 grow bw2 shadow-5'>
      <img src={`https://robohash.org/${id}?size=300x300`} alt='robot'/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card;