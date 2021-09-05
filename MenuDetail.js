import React, { Component } from 'react';

export default class MenuDetail extends Component {
  render() {
    return (
      <>
        <div className="menu">
          <img
            alt="menu1"
            className="menu-image"
            src="/images/Main/takjuImg.ec40a4eb.png"
            title="탁주"
          />
          <label className="category-name">탁주</label>
        </div>
        <div className="menu">
          <img
            className="menu-image"
            alt="menu2"
            src="/images/Main/chungjuImg.dee3ee7e.png"
            title="약·청주"
          />
          <label className="category-name">약·청주</label>
        </div>
        <div className="menu">
          <img
            className="menu-image"
            alt="menu3"
            src="/images/Main/wineImg.59c55ac6.png"
            title="과실주"
          />
          <label className="category-name">과실주</label>
        </div>
        <div className="menu">
          <img
            className="menu-image"
            alt="menu4"
            src="/images/Main/sojuImg.983aae01.png"
            title="증류주"
          />{' '}
          <label className="category-name">증류주</label>
        </div>
      </>
    );
  }
}
