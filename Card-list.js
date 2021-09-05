import React from 'react';
import { Card } from './Card';
import './Main.scss';

export const CardList = props => {
  return (
    <section className="card-list">
      {props.monsters.map(monster => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </section>
  );
};
