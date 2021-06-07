import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'

const Navbar = () => {

  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleMenu = () => {
    console.log(linksContainerRef.current);
    console.log(linksRef.current);
    setShowLinks(!showLinks);
  }

  useEffect( ()=> {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`
    }
    else {
      linksContainerRef.current.style.height = '0px';
    }
  }
  ,[showLinks]);
  return (
    <nav className='nav'>
      <section className='nav-center'>
        <div className='nav-header'>
          <h3 className='logo'>Duane Evans</h3>
          <button type='button' onClick={toggleMenu} className='nav-toggle'><FaBars /></button>
        </div>
        <article className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {
              links.map((link) => {
                const {id, url, text} = link;
                return (
                  <li key={`link${id}`}>
                    <a href={url} >{text}</a>
                  </li>
                );
              })
            }
          </ul>
        </article>
        <ul className='social-icons'>
        {
          social.map((social) => {
            const {id, url, icon} = social;
            return (
              <li key={`social${id}`}>
                <a  href={url}>{icon}</a>
              </li>
            );
          })
        }
        </ul>
      </section>
    </nav>
  );
}

export default Navbar
