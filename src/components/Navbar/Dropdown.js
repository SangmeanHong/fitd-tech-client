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
            // <div className = 'dropdown-link'>
            <li key={index}>
              {
                newWebPage ? (
                  <a id='contentlink' href={item.path} target="_blank" rel="noopener noreferrer">{item.title}</a>
                ):(
                  <a id='contentlink' href={item.path} >{item.title}</a>
                )
              }
            </li>
            // </div>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;