import React, { Component } from 'react';
import BestSellerMockData from './BestSellerMockData';
import BestItemComp2 from './BestItemComp2';
import './BestItem.scss';

export default class BestItemComp extends Component {
  render() {
    return (
      <>
        <div className="best-seller-wrapper">
          <p className="desc-word">이번 주 가장 인기 많은 술 TOP3에요!</p>
          <div className="best-seller-section">
            <div className="best-seller">
              <span></span>
              <img
                className="rocket-img"
                alt="rocket-img"
                src="https://www.sooldamhwa.com/static/media/rocket.6513dff4.png"
              />
              <p className="word-below-rocket">베스트 셀러</p>
            </div>
            <div className="best-seller-card-wrapper">
              {BestSellerMockData.map((best, idx) => {
                return <BestItemComp2 key={idx} Product={best} />;
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}
