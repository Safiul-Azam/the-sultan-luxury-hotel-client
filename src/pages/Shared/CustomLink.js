import React from 'react';
import {
    Link,
    useMatch,
    useResolvedPath,
  } from "react-router-dom";
function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div className='hover:text-primary'>
        <Link
          style={{ color: match ? "#aa8453" : "#444444", hover:'#aa8453' }}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
  }

export default CustomLink;