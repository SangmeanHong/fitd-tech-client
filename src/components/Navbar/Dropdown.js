import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems.map((item, index) => {
          const newWebPage = item.path.includes('https://');
          return (
            <li key={index}>
              {
                newWebPage ? (
                  <a href={item.path} target="_blank" rel="noopener noreferrer">{item.title}</a>
                ):(
                  <a href={item.path} >{item.title}</a>
                )
              }
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;