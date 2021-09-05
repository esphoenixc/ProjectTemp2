import React, { Component } from 'react';

export default class MenuDetail2 extends Component {
  render() {
    return (
      <div className="menu">
        <img
          alt={this.props.MenuDataAlt}
          className="menu-image"
          src={this.props.MenuDataImg}
          title={this.props.MenuDataTitle}
        />
        <label className="category-name">{this.props.MenuDataName}</label>
      </div>
    );
  }
}
