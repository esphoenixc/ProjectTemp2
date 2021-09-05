import React, { Component } from 'react';
import ReviewStar from './ReviewStar';
import './BestItem.scss';

export default class BestItemComp2 extends Component {
  render() {
    const { img, name, price, rating, description } = this.props.Product;
    return (
      <>
        <div className="best-seller-card">
          <img className="best-seller-img" alt="best-img-1" src={img} />
          <div className="best-seller-desc">
            <div className="desc-wrapper">
              <p className="product-name">{name}</p>
              <p className="product-price">{price}원</p>
              {description.map(desc => {
                return <p className="hash">{desc}</p>;
              })}
            </div>
            <div className="rating-section">
              <ReviewStar />
              <p className="rating-score">{rating}평점</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
