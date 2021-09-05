import React, { Component } from 'react';
import './NewItem.scss';
import ReviewStar from './ReviewStar';

class NewItem extends Component {
  render() {
    return (
      <div className="best-seller-wrapper">
        <p className="new-desc-word">새로 입점한 우리술이에요!</p>
        <div className="best-seller-section">
          <div className="new-item">
            <span></span>
            <img
              className="rocket-img"
              alt="new-item-img"
              src="https://www.sooldamhwa.com/static/media/tie.baa290c0.png"
            />
            <p class="word-below-rocket">금주의 신상품</p>
          </div>
          <div className="best-seller-card-wrapper">
            <div className="best-seller-card">
              <img
                className="best-seller-img"
                alt="new-item-img-1"
                src="https://sooldamhwa-static-files.s3.ap-northeast-2.amazonaws.com/admin_contents/origin/9QZ4-1620961678875-%EB%8B%B4%EC%9D%80.jpg"
              />
              <div className="best-seller-desc">
                <div className="desc-wrapper">
                  <p className="product-name">담은</p>
                  <p className="product-price">29,160원</p>
                  <p className="hash">#입안을_가득_채우는_푸근함</p>
                  <p className="hash">#카페라떼처럼_부드러운</p>
                </div>
                <div className="rating-section">
                  <ReviewStar />
                  <p className="rating-score">0.0평점</p>
                </div>
              </div>
            </div>
            <div className="best-seller-card">
              <img
                className="best-seller-img"
                alt="new-item-img2"
                src="https://sooldamhwa-static-files.s3.ap-northeast-2.amazonaws.com/admin_contents/origin/9QZ4-1620961678875-%EB%8B%B4%EC%9D%80.jpg"
              />
              <div className="best-seller-desc">
                <div className="desc-wrapper">
                  <p className="product-name">담은</p>
                  <p className="product-price">29,160원</p>
                  <p className="hash">#입안을_가득_채우는_푸근함</p>
                  <p className="hash">#카페라떼처럼_부드러운</p>
                </div>
                <div className="rating-section">
                  <ReviewStar />
                  <p className="rating-score">0.0평점</p>
                </div>
              </div>
            </div>
            <div className="best-seller-card">
              <img
                className="best-seller-img"
                alt="new-item-img-3"
                src="https://sooldamhwa-static-files.s3.ap-northeast-2.amazonaws.com/admin_contents/origin/9QZ4-1620961678875-%EB%8B%B4%EC%9D%80.jpg"
              />
              <div className="best-seller-desc">
                <div className="desc-wrapper">
                  <p className="product-name">담은</p>
                  <p className="product-price">29,160원</p>
                  <p className="hash">#입안을_가득_채우는_푸근함</p>
                  <p className="hash">#카페라떼처럼_부드러운</p>
                </div>
                <div className="rating-section">
                  <ReviewStar />
                  <p className="rating-score">0.0평점</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewItem;
