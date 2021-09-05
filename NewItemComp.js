import React, { Component } from 'react';
import BestSellerMockData from './BestSellerMockData';
import NewItemComp2 from './NewItemComp2';
import './NewItem.scss';

export default class NewItemComp extends Component {
  render() {
    return (
      <>
        <div className="best-seller-wrapper">
          <p className="desc-word">새로 입점한 우리술이에요!</p>
          <div className="best-seller-section">
            <div className="new-item">
              <span></span>
              <img
                className="rocket-img"
                alt="rocket-img"
                src="https://www.sooldamhwa.com/static/media/rocket.6513dff4.png"
              />
              <p className="word-below-rocket">금주의 신상품</p>
            </div>
            <div className="best-seller-card-wrapper">
              {BestSellerMockData.map((newDrink, idx) => {
                return <NewItemComp2 key={idx} Product={newDrink} />;
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}
