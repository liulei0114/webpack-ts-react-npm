import React from 'react';
import { Button } from 'antd';
import { MyBtnProps } from '..';

const MyButton: React.FC<MyBtnProps> = props => {
  return <Button>{props.text}</Button>;
};

export default MyButton;
