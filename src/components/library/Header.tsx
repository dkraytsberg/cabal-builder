import React from "react";

// interface HeaderProps {
//   readonly text: string;
// }

const Header: React.FC = ({ children }) => {
  return <h1 className="Header">{children}</h1>;
};

export default Header;
