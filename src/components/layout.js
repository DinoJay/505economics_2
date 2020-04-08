import PropTypes from "prop-types";
import React  from "react";

// import Header from "./header";

function Layout({ children, }) {


  return (
    <div className="flex flex-grow flex-col font-sans min-h-screen h-full text-gray-900">

      <main className="flex flex-col flex-1 w-full">
        {children}
      </main>

    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  onHeightUpdate: PropTypes.func,
  onHeaderUpdate: PropTypes.func
};

export default Layout;
