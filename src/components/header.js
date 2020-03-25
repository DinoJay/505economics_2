import {  Link } from "gatsby";
import React, { useState } from "react";
import logoSrc from '../images/505-logo.svg';

const Header = React.forwardRef((props, ref) => {
  const [isExpanded] = useState(false);

  return (
    <header className="" ref={ref}>
      <div className="flex flex-wrap items-center max-w-4xl mx-auto p-2">
        <Link className="flex h-12 items-center no-underline " to="/">
          <img src={logoSrc} alt="Logo" className="h-12" />
        </Link>

        <h1 className="ml-2 text-2xl">505 Economics</h1>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/`,
              title: `Home`
            },
            {
              route: `/about`,
              title: `About`
            },
            {
              route: `/contact`,
              title: `Contact`
            }
          ].map(link => (
            <Link
              className="block md:inline-block mt-4 md:mt-0 md:ml-6 no-underline text-white"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
});

Header.displayName="Header";

export default Header;
