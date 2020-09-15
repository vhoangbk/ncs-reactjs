import React from 'react';
import '../styles/menu.scss';
const Menu = ({ menus }) => (
  <div className="Menu">
    <ul>
      {menus.map(menu => (
        <li key={menu.url}>
          <a href={menu.url}>{menu.url}</a>
        </li>
      ))}
    </ul>
  </div>
);
export default Menu;