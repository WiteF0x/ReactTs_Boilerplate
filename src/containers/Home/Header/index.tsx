import React from 'react';

interface IHeader {
  title: string
}

const Header = (props: IHeader) => {
  const { title } = props;

  return (
    <div className="Top">
      <text className="title">{title}</text>
    </div>
  )
};

export default Header;
