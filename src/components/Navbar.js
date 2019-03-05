import React, { useEffect } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import autobind from 'autobind-decorator';
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg' 
import './NavBar.scss';

export const query = graphql`
query Navigation{
  allDataYaml {
    edges {
      node {
        logo
        menu {
          menuitem {
            slug
            title
          }
        }
      }
    }
  }
}
`;
const makeHamburger = () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll('.navbar-burger'),
    0
  )
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target
        const $target = document.getElementById(target)

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active')
        $target.classList.toggle('is-active')
      })
    })
  }
};

const NavBar = () => {

  useEffect(makeHamburger);

  const renderMenuItem = ({ menuitem }, idx) => {
    return (
      <Link key={idx} className="ab-navitem" to={menuitem.slug}>
        {menuitem.title}
      </Link>
    );
  }

  const renderMenu = () => (
    <StaticQuery 
      query={query} 
      render={data => {
        return data.allDataYaml.edges[0].node.menu.map(m => renderMenuItem(m))
      }}
    />
  );
  
  const renderLogo = () => (
    <StaticQuery 
      query={query} 
      render={data => {
        const style = {
          backgroundImage: `url("${data.allDataYaml.edges[0].node.logo}")`
        };
        console.log(style)
        return <Link to="/" key="logo" className="ab-logo" style={style}/>
      }}
    />
  );

  return (
    <nav
      className="ab-navbar"
      role="navigation"
      aria-label="main-navigation"
    >
      {renderMenu()}
      {renderLogo()}
      {renderMenu()}
    </nav>
  );
};

export default NavBar;
