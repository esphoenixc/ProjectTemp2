import React, { Component } from 'react';
import MenuDetail2 from './MenuDetail2';
import MenuData from './MenuData';

export default class Menu extends Component {
  render() {
    return (
      <section className="menu-bar">
        {MenuData.map((menu, idx) => {
          return (
            <MenuDetail2
              key={idx}
              MenuDataName={menu.name}
              MenuDataAlt={menu.alt}
              MenuDataImg={menu.image}
              MenuDataTitle={menu.title}
            />
          );
        })}
      </section>
    );
  }
}
