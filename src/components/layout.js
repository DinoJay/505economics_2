import PropTypes from "prop-types";
import React, {useRef, useEffect} from "react";

import Header from "./header";

function Layout({ children, onHeightUpdate, onHeaderUpdate}) {
  const ref= useRef();
  const ref1= useRef();

  useEffect(() => {
    const h = ref.current.clientHeight;
    console.log('h', h);
    onHeightUpdate(h);
    onHeaderUpdate(ref1.current.clientHeight);
  }, [])

  return (
    <div ref={ref}className="flex flex-col font-sans min-h-screen text-gray-900">
      <Header ref={ref1}/>

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
