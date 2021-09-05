import React, { Component } from 'react';
import ReviewStar from './ReviewStar';
import './BestItem.scss';
import './FirstItem';

export const FirstItem2 = props => {
  console.log('FirstItem2 :', props);
  const { image, name, price, hash, grade } = props.product;
  return (
    <>
      <div className="first-item-card">
        <img className="first-item-img" alt="best-img-1" src={image} />
        <div className="first-item-desc">
          <div className="desc-wrapper">
            <p className="product-name">{name}</p>
            <p className="product-price">{price}원</p>
            {hash.map(desc => {
              return <p className="hash">{desc.caption}</p>;
            })}
          </div>
          <div className="rating-section">
            <ReviewStar />
            <p className="rating-score">{props.product.grade}평점</p>
          </div>
        </div>
      </div>
    </>
  );
};
