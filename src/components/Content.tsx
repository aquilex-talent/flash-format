import React from "react";

interface ContentProps {
  children: React.ReactNode;
}

const Content = ({ children }: ContentProps) => {
  return <div className="content">{children}</div>;
};

export default Content;
