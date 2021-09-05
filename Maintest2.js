import React from 'react';
import { Maintest3 } from './Maintest3';
import './Main.scss';

export const Maintest2 = props => {
  return (
    <section className="card-list">
      {props.products.map(product => {
        return <Maintest3 key={product.id} product={product} />;
      })}
    </section>
  );
};
