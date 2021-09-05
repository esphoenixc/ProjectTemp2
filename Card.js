import React from 'react';

export const Card = props => {
  return (
    <div>
      <img
        alt="monsters"
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      />
      <h3>{props.monster.name}</h3>
      <p>{props.monster.email}</p>
    </div>
  );
};
