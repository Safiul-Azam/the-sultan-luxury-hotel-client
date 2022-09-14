import React from 'react';
import {
    Link,
    useMatch,
    useResolvedPath,
  } from "react-router-dom";
function DashCustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div className='hover:text-primary text-gray-600 hover:bg-transparent'>
        <Link
          style={{ color: match ? "#aa8453" : "" }}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
  }

export default DashCustomLink;